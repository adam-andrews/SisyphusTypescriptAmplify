import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { voteByPostId, getPost } from '../graphql/queries';
import { GetPostQuery, Vote as VoteType } from '../API';
import { createVote } from '../graphql/mutations';

import { useUser } from '../context/AuthContext';

interface UpvoteProps {
	postId: string;
}
function Upvote({ postId }: UpvoteProps) {
	const { user, setUser } = useUser();
	const [upvotes, setUpvotes] = useState<VoteType[]>();
	const [upvoteScore, setUpvoteScore] = useState(0);
	const [hasUpvoted, setHasUpvoted] = useState(false);

	useEffect(() => {
		fetchUpvoteByPostID();
	}, [postId]);
	async function fetchUpvoteByPostID() {
		if (!postId) return;
		console.log('fetching upvotes');
		try {
			const { data } = (await API.graphql({
				query: getPost,
				variables: { id: postId },
			})) as {
				data: GetPostQuery;
				errors: any[];
			};
			if (!data.getPost || !data.getPost.Votes) return;
			setUpvotes(data.getPost.Votes.items as VoteType[]);
		} catch (err) {
			console.log('error fetching upvote', err);
		}
	}
	async function AddUpvote() {
		try {
			const upvote = {
				postID: postId,
				userID: user?.username,
				vote: 'yes',
			};
			await API.graphql(graphqlOperation(createVote, { input: upvote }));
		} catch (err) {
			console.log('error creating upvote', err);
		}
	}
	function upvotePost() {
		if (!user) return;

		console.log('upvote');
		if (!hasUpvoted) {
			AddUpvote();
			setUpvoteScore(upvoteScore + 1);
			setHasUpvoted(true);
		} else {
			setUpvoteScore(upvoteScore + 2);
		}
	}

	function downvotePost() {
		if (!user) return;
		if (!hasUpvoted) {
			setUpvoteScore(upvoteScore - 1);
			setHasUpvoted(true);
		} else {
			setUpvoteScore(upvoteScore - 2);
		}
	}
	return (
		<div className="flex flex-col w-12 items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
			<ArrowUpIcon
				onClick={(event) => {
					event.preventDefault();
					upvotePost();
				}}
				className="voteButtons hover:text-blue-400"
			/>
			<span className="text-black font-bold text-xs">{upvoteScore}</span>
			<ArrowDownIcon
				onClick={(event) => {
					event.preventDefault();
					downvotePost();
				}}
				className="voteButtons hover:text-red-400"
			/>
		</div>
	);
}

export default Upvote;

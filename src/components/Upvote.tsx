import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { voteByPostId, getPost } from '../graphql/queries';
import { GetVoteQuery, Vote as VoteType } from '../API';

function Upvote() {
	const [upvotes, setUpvotes] = useState();
	const [upvoteScore, setUpvoteScore] = useState(0);
	const [hasUpvoted, setHasUpvoted] = useState(false);
	useEffect(() => {
		fetchUpvoteByPostID();
	});
	async function fetchUpvoteByPostID() {
		try {
			const post = '54fdfbb9-8f80-4bff-bd23-fe5948d25955';
			const { data } = (await API.graphql({
				query: voteByPostId,
				variables: { id: post },
			})) as {
				data: GetVoteQuery;
				errors: any[];
			};
			console.log('upvote data', data);
		} catch (err) {
			console.log('error fetching upvote', err);
		}
	}
	async function upvotePost() {
		console.log('upvote');
		if (!hasUpvoted) {
			setUpvoteScore(upvoteScore + 1);
			setHasUpvoted(true);
		} else {
			setUpvoteScore(upvoteScore + 2);
		}
	}

	async function downvotePost() {
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
				className="voteButtons hover:text-blue-400"
			/>
		</div>
	);
}

export default Upvote;

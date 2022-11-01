import React, { useState, useEffect } from 'react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { voteByPostId, getPost } from '../graphql/queries';
import {
	CreateVoteInput,
	GetPostQuery,
	UpdateVoteMutation,
	Vote as VoteType,
} from '../API';
import {
	createVote,
	updateVote as updateVoteQuery,
} from '../graphql/mutations';

import { useUser } from '../context/AuthContext';

interface UpvoteProps {
	postId: string;
}

function Upvote({ postId }: UpvoteProps) {
	const { user, setUser } = useUser();
	const [upvotes, setUpvotes] = useState<VoteType[]>();
	const [upvoteScore, setUpvoteScore] = useState(0);
	const [hasUpvoted, setHasUpvoted] = useState<boolean>();
	const [userVote, setUserVote] = useState<VoteType>();

	console.log('upvotes', upvotes);
	useEffect(() => {
		fetchUpvoteByPostID();
	}, [postId]);

	useEffect(() => {
		hasUserUpvoted();
		getUpvoteScore();
	}, [upvotes]);

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
	async function addVote(vote: string) {
		try {
			const upvote = {
				postID: postId,
				username: user?.username,
				vote: vote,
			};

			const { data } = (await API.graphql(
				graphqlOperation(createVote, { input: upvote })
			)) as {
				data: any;
				errors: any[];
			};
			if (!data.createVote) return;
			setUserVote(data.createVote);
		} catch (err) {
			console.log('error creating upvote', err);
		}
	}
	async function updateVote(vote: string) {
		console.log('update vote');
		if (!userVote) return;
		console.log('userVote', userVote);
		console.log('vote', userVote.id);
		console.log('vote text', vote);
		try {
			const upvote = {
				id: userVote?.id,
				vote: vote,
			};

			const { data } = (await API.graphql(
				graphqlOperation(updateVoteQuery, { input: upvote })
			)) as {
				data: UpdateVoteMutation;
				errors: any[];
			};
			console.log('data of update vote', data);
			userVote.vote = vote;
			console.log('All Votes', upvotes);
		} catch (err) {
			console.log('error creating upvote', err);
		}
	}
	function getUpvoteScore() {
		let total = 0;
		upvotes?.forEach((upvote) => {
			if (upvote.vote === 'upvote') {
				total++;
			} else if (upvote.vote === 'downvote') {
				total--;
			}
		});
		setUpvoteScore(total);
	}
	function hasUserUpvoted() {
		upvotes?.forEach((upvote) => {
			if (upvote.username === user?.username) {
				upvote.vote === 'upvote' ? setHasUpvoted(true) : setHasUpvoted(false);
				setUserVote(upvote);
			}
		});
	}
	function upvotePost() {
		// Stops user from upvoting if they have already upvoted and if they are not logged in
		if (!user || hasUpvoted === true) return;
		console.log('upvoting post');
		if (hasUpvoted == null) {
			addVote('upvote');
			setUpvoteScore(upvoteScore + 1);
			setHasUpvoted(true);
		} else {
			updateVote('upvote');
			setUpvoteScore(upvoteScore + 2);
			setHasUpvoted(true);
		}
	}

	function downvotePost() {
		// Stops user from upvoting if they have already upvoted and if they are not logged in
		if (!user || hasUpvoted === false) return;
		console.log('downvote');
		if (hasUpvoted == null) {
			addVote('downvote');
			setUpvoteScore(upvoteScore - 1);
			setHasUpvoted(true);
		} else {
			updateVote('downvote');
			setUpvoteScore(upvoteScore - 2);
			setHasUpvoted(false);
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

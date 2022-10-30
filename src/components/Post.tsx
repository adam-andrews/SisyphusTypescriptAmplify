/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BookmarkIcon,
	ChatAltIcon,
	DotsCircleHorizontalIcon,
	GiftIcon,
	ShareIcon,
} from '@heroicons/react/outline';
import Avatar from './Avatar';
import TimeAgo from 'react-timeago';
import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { Post as PostType } from '../API';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listVotes } from '../graphql/queries';

interface PostProps {
	post: PostType;
}

export default function Post({ post }: PostProps) {
	const [upvote, setUpvote] = useState(0);
	const [hasUpvoted, setHasUpvoted] = useState(false);
	const [comments, setComments] = useState<any[]>([]);
	useEffect(() => {});
	async function fetchUpvote() {
		try {
			const { data } = (await API.graphql({ query: listVotes })) as {
				data: any;
				errors: any[];
			};
			console.log('allUpvotes', data);
			//loops through all votes and adds up the upvotes and subtracts the downvotes
			var count = 0;
			const mapVotes = data.listVotes.items.map((vote: { vote: string }) => {
				console.log('vote', vote.vote);
				if (vote.vote === 'yes') {
					count += 1;
				} else {
					count -= 1;
				}
			});
			setUpvote(count);
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}

	async function upvotePost() {
		if (!hasUpvoted) {
			setUpvote(upvote + 1);
			setHasUpvoted(true);
		} else {
			setUpvote(upvote + 2);
		}
	}

	async function downvotePost() {
		if (!hasUpvoted) {
			setUpvote(upvote + 1);
			setHasUpvoted(true);
		} else {
			setUpvote(upvote - 2);
		}
	}

	return (
		<Link href={`/post/${post.id}`}>
			<article className="rounded-md flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
				{/* Votes */}
				<div className="flex flex-col w-12 items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
					<ArrowUpIcon
						onClick={upvotePost}
						className="voteButtons hover:text-blue-400"
					/>
					<span className="text-black font-bold text-xs">{upvote}</span>
					<ArrowDownIcon
						onClick={downvotePost}
						className="voteButtons hover:text-blue-400"
					/>
				</div>

				<div className="p-3 pb-1">
					{/* Header */}
					<header className="flex items-center space-x-2">
						<Avatar seed={post.username} />
						<p className="text-xs text-gray-400 ">
							<Link href={`/subreddit`}>
								<span className="font-bold text-black hover:text-red-400 hover:underline">
									r/{post.subredditName}
								</span>
							</Link>{' '}
							* Posted bt u/
							{post.username}{' '}
							<TimeAgo date={post.createdAt ? post.createdAt : ''} />
						</p>
					</header>

					<div className="py-4">
						<h2 className="text-xl font-semibold">{post.title}</h2>
						<p className="mt-2 text-sm font-light">{post.contents}</p>
					</div>

					<div>
						{post.image && (
							<img src={post.image} alt="image" className="w-full" />
						)}
					</div>

					<div className="flex space-x-4 text-gray-400 mt-2">
						<div className="postButtons">
							<ChatAltIcon className="h-6 w-6" />
							<p>{post.Comments?.items ? 1 : '0'} Comments</p>
						</div>
						<div className="postButtons">
							<GiftIcon className="h-6 w-6" />
							<p className="hidden sm:inline">{post.Comments ? '1' : 0}</p>
						</div>
						<div className="postButtons">
							<ShareIcon className="h-6 w-6" />
							<p className="hidden sm:inline">{post.Comments ? '1' : 0}</p>
						</div>
						<div className="postButtons">
							<BookmarkIcon className="h-6 w-6" />
							<p className="hidden sm:inline">{post.Comments ? '1' : 0}</p>
						</div>
						<div className="postButtons">
							<DotsCircleHorizontalIcon className="h-6 w-6" />
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
}

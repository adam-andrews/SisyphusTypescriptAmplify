/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import Upvote from './Upvote';
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
import {
	ListVotesQuery,
	Post as PostType,
	Comment as CommentType,
} from '../API';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { listVotes } from '../graphql/queries';
import { useUser } from '../context/AuthContext';

interface PostProps {
	post: PostType;
}

export default function Post({ post }: PostProps) {
	const [comments, setComments] = useState<CommentType[]>([]);
	const { user, setUser } = useUser();

	return (
		<Link href={`/post/${post.id}`}>
			<article className="rounded-md flex cursor-pointer border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600">
				{/* Votes */}
				<Upvote postId={post.id} />

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
							<p>
								{post.Comments?.items ? post.Comments?.items.length : '0'}{' '}
								Comments
							</p>
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

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Post from '../../components/Post';

import { SubmitHandler, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import Avatar from '../../components/Avatar';
import TimeAgo from 'react-timeago';
import Jelly from '@uiball/loaders';
import { commentByPostId, getPost } from '../../graphql/queries';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { useUser } from '../../context/AuthContext';
import { createComment } from '../../graphql/mutations';
import {
	Post as PostType,
	Comment as CommentType,
	ListPostsQuery,
	OnCreatePostSubscription,
	OnCreateCommentSubscription,
	GetPostQuery,
	CreateCommentInput,
} from '../../API';
import { onCreateComment, onCreatePost } from '../../graphql/subscriptions';

type FormData = {
	comment: string;
};

interface OnCreateCommentSubscriptionProps {
	provider: any;
	value: {
		data: OnCreateCommentSubscription;
	};
}
export default function PostPage() {
	const [postData, setPostData] = useState<PostType>();
	const [comments, setComments] = useState<CommentType[]>();

	const { user, setUser } = useUser();
	const {
		query: { post },
	} = useRouter();

	useEffect(() => {
		fetchPostByID();
	}, [post]);

	useEffect(() => {
		// Creates a subscription to the onCreatePost GraphQL subscription based on post ID
		const subscription = API.graphql({
			query: onCreateComment,
			variables: {
				id: post,
			},
		});
		if ('subscribe' in subscription) {
			const sb = subscription.subscribe({
				next: ({ provider, value }: OnCreateCommentSubscriptionProps) => {
					const { data } = value;

					if (!data.onCreateComment) return;
					setComments((prevComments: any) => {
						if (!prevComments) return [data.onCreateComment];
						return [...prevComments, data.onCreateComment];
					});
				},
				error: (error: any) => {
					console.log('err at subscription to comments', error);
				},
			});
			return () => {
				if ('unsubscribe' in sb) {
					sb.unsubscribe();
				}
			};
		}
	});
	//Filters comments based on their date created and sets the state to the sorted comments
	function filterCommentsByDate(comments: CommentType[]) {
		const sortedComments = comments?.sort((a, b) => {
			return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
		});
		setComments(sortedComments as CommentType[]);
	}

	async function fetchPostByID() {
		if (!post) return;
		try {
			const { data } = (await API.graphql({
				query: getPost,
				variables: { id: post },
			})) as {
				data: GetPostQuery;
				errors: any[];
			};
			console.log('data.getPost', data.getPost);
			setPostData(data.getPost as PostType);
			filterCommentsByDate(data.getPost?.Comments?.items as CommentType[]);
			console.log('Votey', data.getPost?.Votes?.items);
		} catch (error) {
			console.log('error', error);
		}
	}

	const { register, handleSubmit, setValue } = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		console.log('Comment Data', data);
		const commentData = {
			content: data.comment,
			postID: post,
			username: user?.username,
		};
		try {
			const addComment = (await API.graphql({
				query: createComment,
				variables: { input: commentData },
			})) as {
				data: CreateCommentInput;
				errors: any[];
			};
		} catch (error) {
			console.log('error', error);
		}

		const notification = toast.loading('Posting your comment...');
		setValue('comment', '');

		toast.success('Comment successfully posted!', {
			id: notification,
		});
	};

	return (
		<div>
			<Toaster />
			{postData && (
				<div className="mx-auto my-7 max-w-5xl">
					<Post post={postData} />

					<div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
						<p className="text-sm">
							Comment as <span className="text-red-500">{user?.username}</span>
						</p>

						<form
							className="flex max-w-5xl flex-col space-y-2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<textarea
								{...register('comment')}
								disabled={!user}
								className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50 resize-none"
								placeholder={
									user ? 'What are your thoughts?' : 'Please sign in to comment'
								}
							/>

							<button
								disabled={!user}
								type="submit"
								className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200 hover:bg-red-400 transition-colors"
							>
								Comment
							</button>
						</form>
					</div>

					<div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
						<hr className="py-2" />

						{comments ? (
							comments.map((comment: CommentType) => (
								<div
									className="relative flex items-center space-x-2 space-y-5"
									key={comment.id}
								>
									<hr className="absolute top-10 h-16 border left-7 z-0" />
									<div className="z-50">
										<Avatar seed={comment.username} />
									</div>

									<div className="flex flex-col">
										<p className="py-2 text-xs text-gray-400">
											<span className="font-semibold text-gray-600">
												{comment.username}
											</span>{' '}
											· <TimeAgo date={comment.createdAt} />
										</p>
										<p>{comment.content}</p>
									</div>
								</div>
							))
						) : (
							<div></div>
						)}
					</div>
				</div>
			)}
		</div>
	);
}

// import { useMutation, useQuery } from '@apollo/client'
// import { useSession } from 'next-auth/react'
// import { ADD_COMMENT, GET_POST_BY_POST_ID } from '../../graphql/queries'
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
	ListPostsQuery,
	OnCreatePostSubscription,
} from '../../API';
import { onCreatePost } from '../../graphql/subscriptions';
import {
	Post as PostData,
	GetPostQuery,
	Comment as CommentData,
} from '../../API';
type FormData = {
	comment: string;
};

interface OnCreatePostSubscriptionProps {
	provider: any;
	value: {
		data: OnCreatePostSubscription;
	};
}
export default function PostPage() {
	const [postData, setPostData] = useState<PostData>();
	const { user, setUser } = useUser();
	const {
		query: { post },
	} = useRouter();

	useEffect(() => {
		fetchPostsByID();
	}, []);

	console.log(postData);
	async function fetchPostsByID() {
		try {
			const { data } = (await API.graphql({
				query: getPost,
				variables: { id: post },
			})) as {
				data: GetPostQuery;
				errors: any[];
			};

			setPostData(data.getPost as PostData);
		} catch (error) {
			console.log('error', error);
		}
	}
	//   const { data: session } = useSession()
	//   const [addComment] = useMutation(ADD_COMMENT, {
	//     refetchQueries: [GET_POST_BY_POST_ID, 'getPostListByPostId'],
	//   })
	const { register, handleSubmit, setValue } = useForm<FormData>();
	//   const { data } = useQuery(GET_POST_BY_POST_ID, {
	//     variables: {
	//       post_id: postId,
	//     },
	//   })

	//   const post: Post = data?.getPostListByPostId

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		console.log('Comment Data', data);
		const commentData = {
			content: data.comment,
			postID: post,
			username: user.username,
		};
		try {
			const addComment = (await API.graphql({
				query: createComment,
				variables: { input: commentData },
			})) as {
				data: any;
				errors: any[];
			};
		} catch (error) {
			console.log('error', error);
		}

		const notification = toast.loading('Posting your comment...');

		// await addComment({
		//   variables: {
		//     post_id: postId,
		//     username: session?.user?.name,
		//     text: data.comment,
		//   },
		// })

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
							Comment as <span className="text-red-500">{user.username}</span>
						</p>

						<form
							className="flex max-w-5xl flex-col space-y-2"
							onSubmit={handleSubmit(onSubmit)}
						>
							<textarea
								{...register('comment')}
								// disabled={!session}
								className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50 resize-none"
								placeholder={
									true ? 'What are your thoughts?' : 'Please sign in to comment'
								}
							/>

							<button
								// disabled={!session}
								type="submit"
								className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200 hover:bg-red-400 transition-colors"
							>
								Comment
							</button>
						</form>
					</div>

					<div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
						<hr className="py-2" />

						{postData.Comments
							? postData?.Comments.items.map((comment: any) => (
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
							: null}
					</div>
				</div>
			)}
		</div>
	);
}

import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts, postBySubredditName } from '../graphql/queries';
import awsExports from '../aws-exports';
import { Amplify, API, graphqlOperation, DataStore } from 'aws-amplify';
import { Post as PostType, ListPostsQuery } from '../API';
import { Post as PostModel, Comment as CommentModel } from '../models';

Amplify.configure(awsExports);

interface FeedProps {
	topic?: string;
}

export default function Feed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostModel[]>();
	const [comments, setComments] = useState<CommentModel[]>();
	useEffect(() => {
		fetchPosts();
		fetchComments();
	}, []);
	console.log(topic);
	async function fetchComments() {
		try {
			const allComments = await DataStore.query(CommentModel);
			setComments(allComments);
			console.log('allComments', allComments);
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}
	async function fetchPosts() {
		try {
			const allPosts = await DataStore.query(PostModel);
			setPosts(allPosts);

			// if (allPosts.data.listPosts.items) {
			// 	setPosts(allPosts.data.listPosts.items as PostType[]);
			// }
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}

	return (
		<div className="mt-5 space-y-4">
			{posts?.map(
				(post, index) => (
					console.log('post', post), (<Post key={index} post={post} />)
				)
			)}
		</div>
	);
}

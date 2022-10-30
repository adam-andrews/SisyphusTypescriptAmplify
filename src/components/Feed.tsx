import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts, postBySubredditName } from '../graphql/queries';
import awsExports from '../aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Post as PostType, ListPostsQuery } from '../API';

Amplify.configure(awsExports);

interface FeedProps {
	topic?: string;
}

export default function Feed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostType[]>();
	const [comments, setComments] = useState<any[]>();

	async function fetchPosts() {
		try {
			const { data } = (await API.graphql({ query: listPosts })) as {
				data: ListPostsQuery;
				errors: any[];
			};
			if (!data || !data.listPosts) return;
			setPosts(data.listPosts.items as PostType[]);
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}
	async function fetchComments() {
		try {
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}
	useEffect(() => {
		fetchPosts();
		fetchComments();
	}, []);

	return (
		<div className="mt-5 space-y-4">
			{posts?.map(
				(post, index) => (
					console.log('post', post.Comments?.items),
					(<Post key={index} post={post} />)
				)
			)}
		</div>
	);
}

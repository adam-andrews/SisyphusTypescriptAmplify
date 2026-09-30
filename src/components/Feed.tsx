import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts, postBySubredditName } from '../graphql/queries';
import { GraphQLQuery, GraphQLSubscription } from 'aws-amplify/api';
import { client } from '../lib/amplifyClient';
import {
	Post as PostType,
	ListPostsQuery,
	OnCreatePostSubscription,
} from '../API';
import { onCreatePost } from '../graphql/subscriptions';

interface FeedProps {
	topic?: string;
}

export default function Feed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostType[]>();

	useEffect(() => {
		const sb = client
			.graphql<GraphQLSubscription<OnCreatePostSubscription>>({
				query: onCreatePost,
			})
			.subscribe({
				next: ({ data }) => {
					console.log('data changed', data);
					setPosts((prevPosts: any) => {
						if (!prevPosts) return [data.onCreatePost];
						return [data.onCreatePost, ...prevPosts];
					});
				},
				error: (error: any) => {
					console.log('err at subscription to posts', error);
				},
			});
		return () => sb.unsubscribe();
	}, []);

	function filterPostsByDate(posts: PostType[]) {
		const sortedPosts = posts?.sort((a, b) => {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});
		setPosts(sortedPosts as PostType[]);
	}
	async function fetchPosts() {
		console.log('fetching posts');
		try {
			const { data } = await client.graphql<GraphQLQuery<ListPostsQuery>>({
				query: listPosts,
			});
			if (!data || !data.listPosts) return;

			filterPostsByDate(data.listPosts.items as PostType[]);
		} catch (err) {
			console.log('error fetching posts', err);
		}
	}
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="mt-5 space-y-4">
			{posts?.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</div>
	);
}

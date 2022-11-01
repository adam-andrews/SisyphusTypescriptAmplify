import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts, postBySubredditName } from '../graphql/queries';
import awsExports from '../aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import {
	Post as PostType,
	ListPostsQuery,
	OnCreatePostSubscription,
} from '../API';
import { onCreatePost } from '../graphql/subscriptions';

Amplify.configure(awsExports);

interface FeedProps {
	topic?: string;
}

interface OnCreatePostSubscriptionProps {
	provider: any;
	value: {
		data: OnCreatePostSubscription;
	};
}

export default function Feed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostType[]>();

	useEffect(() => {
		console.log('fetching posts');
		const subscription = API.graphql({
			query: onCreatePost,
		});
		if ('subscribe' in subscription) {
			const sb = subscription.subscribe({
				next: ({ provider, value }: OnCreatePostSubscriptionProps) => {
					const { data } = value;
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
			return () => {
				if ('unsubscribe' in sb) {
					sb.unsubscribe();
				}
			};
		}
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
			const { data } = (await API.graphql({ query: listPosts })) as {
				data: ListPostsQuery;
				errors: any[];
			};
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

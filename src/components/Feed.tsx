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

	function filterPostsByDate(posts: PostType[]) {
		const sortedPosts = posts?.sort((a, b) => {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		});
		setPosts(sortedPosts as PostType[]);
	}
	async function fetchPosts() {
		try {
			const { data } = (await API.graphql({ query: listPosts })) as {
				data: ListPostsQuery;
				errors: any[];
			};
			if (!data || !data.listPosts) return;

			filterPostsByDate(data.listPosts.items as PostType[]);
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
			{posts?.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</div>
	);
}

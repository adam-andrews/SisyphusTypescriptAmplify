import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts, postBySubredditName } from '../src/graphql/queries';
import awsExports from '../src/aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { Post as PostType, ListPostsQuery } from '../src/API';
Amplify.configure(awsExports);

interface FeedProps {
	topic?: string;
}

export default function Feed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostType[]>();
	useEffect(() => {
		fetchPosts();
	}, []);
	console.log(topic);
	async function fetchPosts() {
		try {
			const allPosts = (await API.graphql({ query: listPosts })) as {
				data: any;
				errors: any[];
			};

			console.log('All posts', allPosts);
			console.log('all Posts data', allPosts.data);
			if (allPosts.data.listPosts.items) {
				setPosts(allPosts.data.listPosts.items as PostType[]);
			}
		} catch (err) {
			console.log('error fetching todos', err);
		}
	}

	return (
		<div className="mt-5 space-y-4">
			{posts?.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</div>
	);
}

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

export default function SubredditFeed({ topic }: FeedProps) {
	const [posts, setPosts] = useState<PostType[]>();
	useEffect(() => {
		fetchPosts();
	}, []);
	console.log('Subreddit feed topic', topic);
	async function fetchPosts() {
		try {
			console.log('topic yes', topic);
			const subredditRequest = (await API.graphql({
				query: postBySubredditName,
				variables: { subredditName: topic },
			})) as {
				data: any;
				errors: any[];
			};

			console.log('subredditRequest', subredditRequest);

			// console.log('Subreddit feed All posts', data.postBySubredditName);
			// console.log('Subreddit feed all Posts', data.data);
			// if (allPosts.data.listPosts.items) {
			// 	setPosts(allPosts.data.listPosts.items as PostType[]);
			// }
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

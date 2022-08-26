import React, { useEffect, useState } from 'react';
import Post from './Post';
import { listPosts } from '../src/graphql/queries';
import awsExports from '../src/aws-exports';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
Amplify.configure(awsExports);

interface FeedProps {
	topic?: string;
}

export default function Feed({ topic }: FeedProps) {
	const [feed, setFeed] = useState([]);

	useEffect(() => {
		fetchPosts();
	}, []);

	async function fetchPosts(){
		try {
			const postData:any = await API.graphql(graphqlOperation(listPosts));
			const posts = postData.data.listPosts.items || [];
      console.log(posts);
			setFeed(feed);
		} catch (err) {
			console.log('error fetching todos');
		}
	}
	const post = {
		id: 1,
		title: 'This is a title',
		body: 'This is a body',
		image:
			'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
		username: 'username',
		subreddit: [{ topic: 'react' }],
		created_at: '2020-01-01',
		comments: ['This is a comment'],
		votes: 0,
		subreddit_id: 1,
		subreddits: ['react'],
	};
	const posts = [post, post, post];

	return (
		<div className="mt-5 space-y-4">
			{posts?.map((post, index) => (
				<Post key={index} post={post} />
			))}
		</div>
	);
}

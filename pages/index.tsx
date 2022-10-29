import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import Feed from '../components/Feed';
import PostBox from '../components/Postbox';
import SubredditRow from '../components/SubredditRow';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { createSubreddit } from '../src/graphql/mutations';
const subreddit = {
	id: 1,
	topic: 'react',
};

//Amplify CreateSubredditInput
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
const Home: NextPage = () => {
	const subreddits = ['Cats', 'Dogs', 'Shrimp', 'programming'];

	return (
		<Authenticator>
			{({ signOut, user }) => (
				<div className="max-w-5xl my-7 mx-auto">
					<Head>
						<title>Sisyphus</title>
					</Head>
					{user && <PostBox />}
					<div className="flex">
						<Feed />
						<div className="top-40 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-200 bg-white lg:inline">
							<p className="text-md mb-1 p-4 pb-3 font-medium tracking-wide">
								Top Communities
							</p>

							<div>
								{subreddits?.map((subreddit, index) => (
									<SubredditRow key={index} topic={subreddit} index={index} />
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</Authenticator>
	);
};

export default Home;

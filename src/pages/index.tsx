import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import Feed from '../components/Feed';
import PostBox from '../components/Postbox';
import SubredditRow from '../components/SubredditRow';
import { API, graphqlOperation, Auth } from 'aws-amplify';

import { createSubreddit } from '../graphql/mutations';
const subreddit = {
	id: 1,
	topic: 'react',
};

//Amplify CreateSubredditInput
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import Header from '../components/Header';
import '@aws-amplify/ui-react/styles.css';
import { useUser } from '../context/AuthContext';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);
const Home: NextPage = () => {
	const subreddits = ['Cats', 'Dogs', 'Shrimp', 'Programming'];
	const { user, setUser } = useUser();
	return (
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
	);
};

export default Home;

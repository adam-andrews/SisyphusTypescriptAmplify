import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import Feed from '../components/Feed';
import PostBox from '../components/Postbox';
import SubredditRow from '../components/SubredditRow';

//Amplify
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
const Home: NextPage = () => {
	const subreddits = ['reactjs', 'javascript', 'typescript', 'programming'];
	return (
		<Authenticator>
			{({ signOut, user }) => (
				<div className="max-w-5xl my-7 mx-auto">
					<Head>
						<title>Reddit 2.0 Clone</title>
					</Head>
					<PostBox />
					<div className="flex">
						<Feed />
						<div className="top-40 ml-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-200 bg-white lg:inline">
							<p className="text-md mb-1 p-4 pb-3 font-medium tracking-wide">
								Top Communities
							</p>

							<div>
								{subreddits?.map((subreddit, index) => (
									<SubredditRow key={1} topic={'react'} index={index} />
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

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);
import AuthContext from '../context/AuthContext';
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<AuthContext>
		<div className="h-screen overflow-y-scroll bg-slate-200">
			<Header />
			<Component {...pageProps} />
		</div>
		</AuthContext>
	);
}

export default MyApp;

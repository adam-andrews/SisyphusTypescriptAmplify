import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

import { Amplify } from 'aws-amplify';
// Completes the Google redirect sign-in on whichever page it lands on
import 'aws-amplify/auth/enable-oauth-listener';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import outputs from '../../amplify_outputs.json';
Amplify.configure(outputs, { ssr: true });
import AuthContext from '../context/AuthContext';
function MyApp({ Component, pageProps }: AppProps) {
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

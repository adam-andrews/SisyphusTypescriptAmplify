import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<div className="h-screen overflow-y-scroll bg-slate-200">
			<Header />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;

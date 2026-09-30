import { defineAuth } from '@aws-amplify/backend';

// Google sign-in is disabled until the GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET
// secrets are set. To re-enable: import `secret` from '@aws-amplify/backend'
// and uncomment `appUrls` and `externalProviders` below.

// const appUrls = [
// 	'http://localhost:3000/',
// 	'https://main.dc8lyi81xzh9g.amplifyapp.com/',
// ];

export const auth = defineAuth({
	loginWith: {
		email: true,
		// externalProviders: {
		// 	google: {
		// 		clientId: secret('GOOGLE_CLIENT_ID'),
		// 		clientSecret: secret('GOOGLE_CLIENT_SECRET'),
		// 		scopes: ['openid', 'email', 'profile'],
		// 		attributeMapping: { email: 'email' },
		// 	},
		// 	callbackUrls: appUrls,
		// 	logoutUrls: appUrls,
		// },
	},
});

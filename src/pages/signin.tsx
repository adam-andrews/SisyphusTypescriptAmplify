import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
function signin() {
	return <Authenticator>{({ signOut, user }) => <div></div>}</Authenticator>;
}

export default signin;

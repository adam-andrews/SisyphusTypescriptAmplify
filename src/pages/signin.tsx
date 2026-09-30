import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
function signin() {
  return (
    <div className="py-8">
      <div className="mx-auto mb-6 max-w-md rounded-md border border-gray-300 bg-white p-4 text-sm">
        <p className="mb-2 font-semibold">Demo Account details</p>
        <p>
          Login: <span className="font-mono">pass@pass.com</span>
        </p>
        <p>
          Password: <span className="font-mono">Password1!</span>
        </p>
      </div>
      <Authenticator>{({ signOut, user }) => <div></div>}</Authenticator>
    </div>
  );
}

export default signin;

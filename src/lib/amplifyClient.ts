import { generateClient } from 'aws-amplify/api';

// Shared GraphQL client. Amplify is configured once in pages/_app.tsx.
export const client = generateClient();

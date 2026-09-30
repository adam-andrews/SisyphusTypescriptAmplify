import { defineData } from '@aws-amplify/backend';

const schema = /* GraphQL */ `
	type Vote @model @auth(rules: [{ allow: public }]) {
		id: ID!
		vote: String!
		postID: ID! @index(name: "byPost", queryField: "voteByPostId")
		username: String!
	}

	type Comment @model @auth(rules: [{ allow: public }]) {
		id: ID!
		content: String!
		postID: ID! @index(name: "byPost", queryField: "commentByPostId")
		username: String!
	}

	type Post @model @auth(rules: [{ allow: public }]) {
		id: ID!
		title: String!
		contents: String!
		image: String
		vote: String!
		subredditID: ID! @index(name: "bySubreddit")
		Comments: [Comment] @hasMany(indexName: "byPost", fields: ["id"])
		Votes: [Vote] @hasMany(indexName: "byPost", fields: ["id"])
		username: String!
		subredditName: String!
			@index(name: "bySubredditName", queryField: "postBySubredditName")
	}

	type Subreddit @model @auth(rules: [{ allow: public }]) {
		id: ID!
		name: String!
			@index(name: "bySubredditName", queryField: "subredditBySubredditName")
		posts: [Post!] @hasMany(indexName: "bySubreddit", fields: ["id"])
	}
`;

export const data = defineData({
	schema,
	authorizationModes: {
		defaultAuthorizationMode: 'apiKey',
		apiKeyAuthorizationMode: { expiresInDays: 365 },
	},
});

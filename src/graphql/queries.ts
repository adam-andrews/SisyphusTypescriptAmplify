/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVote = /* GraphQL */ `
	query GetVote($id: ID!) {
		getVote(id: $id) {
			id
			vote
			postID
			username
			createdAt
			updatedAt
		}
	}
`;
export const listVotes = /* GraphQL */ `
	query ListVotes(
		$filter: ModelVoteFilterInput
		$limit: Int
		$nextToken: String
	) {
		listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				vote
				postID
				username
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const getComment = /* GraphQL */ `
	query GetComment($id: ID!) {
		getComment(id: $id) {
			id
			content
			postID
			username
			createdAt
			updatedAt
		}
	}
`;
export const listComments = /* GraphQL */ `
	query ListComments(
		$filter: ModelCommentFilterInput
		$limit: Int
		$nextToken: String
	) {
		listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				content
				postID
				username
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const getPost = /* GraphQL */ `
	query GetPost($id: ID!) {
		getPost(id: $id) {
			id
			title
			contents
			image
			vote
			subredditID
			Comments {
				items {
					id
					content
					postID
					username
					createdAt
					updatedAt
				}
				nextToken
			}
			Votes {
				items {
					id
					vote
					postID
					username
					createdAt
					updatedAt
				}
				nextToken
			}
			username
			subredditName
			createdAt
			updatedAt
		}
	}
`;
export const listPosts = /* GraphQL */ `
	query ListPosts(
		$filter: ModelPostFilterInput
		$limit: Int
		$nextToken: String
	) {
		listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				title
				contents
				image
				vote
				subredditID
				Comments {
					nextToken
				}
				Votes {
					nextToken
				}
				username
				subredditName
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;

export const getSubreddit = /* GraphQL */ `
	query GetSubreddit($id: ID!) {
		getSubreddit(id: $id) {
			id
			name
			posts {
				items {
					id
					title
					contents
					image
					vote
					subredditID
					username
					subredditName
					createdAt
					updatedAt
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`;
export const listSubreddits = /* GraphQL */ `
	query ListSubreddits(
		$filter: ModelSubredditFilterInput
		$limit: Int
		$nextToken: String
	) {
		listSubreddits(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				posts {
					nextToken
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const voteByPostId = /* GraphQL */ `
	query VoteByPostId(
		$postID: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelVoteFilterInput
		$limit: Int
		$nextToken: String
	) {
		voteByPostId(
			postID: $postID
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				vote
				postID
				username
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const commentByPostId = /* GraphQL */ `
	query CommentByPostId(
		$postID: ID!
		$sortDirection: ModelSortDirection
		$filter: ModelCommentFilterInput
		$limit: Int
		$nextToken: String
	) {
		commentByPostId(
			postID: $postID
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				content
				postID
				username
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const postBySubredditName = /* GraphQL */ `
	query PostBySubredditName(
		$subredditName: String!
		$sortDirection: ModelSortDirection
		$filter: ModelPostFilterInput
		$limit: Int
		$nextToken: String
	) {
		postBySubredditName(
			subredditName: $subredditName
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				title
				contents
				image
				vote
				subredditID
				Comments {
					nextToken
				}
				Votes {
					nextToken
				}
				username
				subredditName
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;
export const subredditBySubredditName = /* GraphQL */ `
	query SubredditBySubredditName(
		$name: String!
		$sortDirection: ModelSortDirection
		$filter: ModelSubredditFilterInput
		$limit: Int
		$nextToken: String
	) {
		subredditBySubredditName(
			name: $name
			sortDirection: $sortDirection
			filter: $filter
			limit: $limit
			nextToken: $nextToken
		) {
			items {
				id
				name
				posts {
					nextToken
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`;

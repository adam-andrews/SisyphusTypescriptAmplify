/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createSubreddit = /* GraphQL */ `
  mutation CreateSubreddit(
    $input: CreateSubredditInput!
    $condition: ModelSubredditConditionInput
  ) {
    createSubreddit(input: $input, condition: $condition) {
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
export const updateSubreddit = /* GraphQL */ `
  mutation UpdateSubreddit(
    $input: UpdateSubredditInput!
    $condition: ModelSubredditConditionInput
  ) {
    updateSubreddit(input: $input, condition: $condition) {
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
export const deleteSubreddit = /* GraphQL */ `
  mutation DeleteSubreddit(
    $input: DeleteSubredditInput!
    $condition: ModelSubredditConditionInput
  ) {
    deleteSubreddit(input: $input, condition: $condition) {
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

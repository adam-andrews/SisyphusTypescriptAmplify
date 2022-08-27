/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote {
    onCreateVote {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote {
    onUpdateVote {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote {
    onDeleteVote {
      id
      vote
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      content
      postID
      username
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSubreddit = /* GraphQL */ `
  subscription OnCreateSubreddit {
    onCreateSubreddit {
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
export const onUpdateSubreddit = /* GraphQL */ `
  subscription OnUpdateSubreddit {
    onUpdateSubreddit {
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
export const onDeleteSubreddit = /* GraphQL */ `
  subscription OnDeleteSubreddit {
    onDeleteSubreddit {
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

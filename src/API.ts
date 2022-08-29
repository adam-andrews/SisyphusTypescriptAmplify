/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVoteInput = {
  id?: string | null,
  vote: string,
  postID: string,
  username: string,
};

export type ModelVoteConditionInput = {
  vote?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Vote = {
  __typename: "Vote",
  id: string,
  vote: string,
  postID: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVoteInput = {
  id: string,
  vote?: string | null,
  postID?: string | null,
  username?: string | null,
};

export type DeleteVoteInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postID: string,
  username: string,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  content: string,
  postID: string,
  username: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postID?: string | null,
  username?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  contents: string,
  image?: string | null,
  vote: string,
  subredditID: string,
  username: string,
  subredditName: string,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  vote?: ModelStringInput | null,
  subredditID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  subredditName?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  contents: string,
  image?: string | null,
  vote: string,
  subredditID: string,
  Comments?: ModelCommentConnection | null,
  Votes?: ModelVoteConnection | null,
  username: string,
  subredditName: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
  nextToken?: string | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  image?: string | null,
  vote?: string | null,
  subredditID?: string | null,
  username?: string | null,
  subredditName?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateSubredditInput = {
  id?: string | null,
  name: string,
};

export type ModelSubredditConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubredditConditionInput | null > | null,
  or?: Array< ModelSubredditConditionInput | null > | null,
  not?: ModelSubredditConditionInput | null,
};

export type Subreddit = {
  __typename: "Subreddit",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type UpdateSubredditInput = {
  id: string,
  name?: string | null,
};

export type DeleteSubredditInput = {
  id: string,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  vote?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  postID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  image?: ModelStringInput | null,
  vote?: ModelStringInput | null,
  subredditID?: ModelIDInput | null,
  username?: ModelStringInput | null,
  subredditName?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelSubredditFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubredditFilterInput | null > | null,
  or?: Array< ModelSubredditFilterInput | null > | null,
  not?: ModelSubredditFilterInput | null,
};

export type ModelSubredditConnection = {
  __typename: "ModelSubredditConnection",
  items:  Array<Subreddit | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubredditMutationVariables = {
  input: CreateSubredditInput,
  condition?: ModelSubredditConditionInput | null,
};

export type CreateSubredditMutation = {
  createSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubredditMutationVariables = {
  input: UpdateSubredditInput,
  condition?: ModelSubredditConditionInput | null,
};

export type UpdateSubredditMutation = {
  updateSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubredditMutationVariables = {
  input: DeleteSubredditInput,
  condition?: ModelSubredditConditionInput | null,
};

export type DeleteSubredditMutation = {
  deleteSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      vote: string,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      vote: string,
      subredditID: string,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      Votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      username: string,
      subredditName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSubredditQueryVariables = {
  id: string,
};

export type GetSubredditQuery = {
  getSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubredditsQueryVariables = {
  filter?: ModelSubredditFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubredditsQuery = {
  listSubreddits?:  {
    __typename: "ModelSubredditConnection",
    items:  Array< {
      __typename: "Subreddit",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type VoteByPostIdQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type VoteByPostIdQuery = {
  voteByPostId?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      vote: string,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CommentByPostIdQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CommentByPostIdQuery = {
  commentByPostId?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string,
      postID: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostBySubredditNameQueryVariables = {
  subredditName: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostBySubredditNameQuery = {
  postBySubredditName?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      contents: string,
      image?: string | null,
      vote: string,
      subredditID: string,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      Votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      username: string,
      subredditName: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SubredditBySubredditNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSubredditFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SubredditBySubredditNameQuery = {
  subredditBySubredditName?:  {
    __typename: "ModelSubredditConnection",
    items:  Array< {
      __typename: "Subreddit",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    content: string,
    postID: string,
    username: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents: string,
    image?: string | null,
    vote: string,
    subredditID: string,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    Votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        postID: string,
        username: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    username: string,
    subredditName: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubredditSubscription = {
  onCreateSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubredditSubscription = {
  onUpdateSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubredditSubscription = {
  onDeleteSubreddit?:  {
    __typename: "Subreddit",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents: string,
        image?: string | null,
        vote: string,
        subredditID: string,
        username: string,
        subredditName: string,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

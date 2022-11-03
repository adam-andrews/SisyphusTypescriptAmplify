import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SubredditMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Vote {
  readonly id: string;
  readonly vote: string;
  readonly postID: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Vote, VoteMetaData>);
  static copyOf(source: Vote, mutator: (draft: MutableModel<Vote, VoteMetaData>) => MutableModel<Vote, VoteMetaData> | void): Vote;
}

export declare class Comment {
  readonly id: string;
  readonly content: string;
  readonly postID: string;
  readonly username: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly contents: string;
  readonly image?: string | null;
  readonly vote: string;
  readonly subredditID: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly Votes?: (Vote | null)[] | null;
  readonly username: string;
  readonly subredditName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class Subreddit {
  readonly id: string;
  readonly name: string;
  readonly posts?: Post[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Subreddit, SubredditMetaData>);
  static copyOf(source: Subreddit, mutator: (draft: MutableModel<Subreddit, SubredditMetaData>) => MutableModel<Subreddit, SubredditMetaData> | void): Subreddit;
}
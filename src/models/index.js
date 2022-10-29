// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vote, Comment, Post, Subreddit } = initSchema(schema);

export {
  Vote,
  Comment,
  Post,
  Subreddit
};
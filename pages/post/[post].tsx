// import { useMutation, useQuery } from '@apollo/client'
// import { useSession } from 'next-auth/react'
// import { ADD_COMMENT, GET_POST_BY_POST_ID } from '../../graphql/queries'
import { useRouter } from 'next/router'
import React from 'react'
import Post from '../../components/Post'

import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import Avatar from '../../components/Avatar'
import TimeAgo from 'react-timeago'
import Jelly from "@uiball/loaders"
type FormData = {
  comment: string
}

const post = {
    id: 1,
    title: 'This is a title',
    body: 'This is a body',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    username: 'username',
    subreddit: [{ topic: 'react' }],
    created_at: '2020-01-01',
    comments: ["This is a comment"],
    votes: 0,
    subreddit_id: 1,
    subreddits:["react"],
}

export default function PostPage() {
//   const {
//     query: { postId },
//   } = useRouter()
//   const { data: session } = useSession()
//   const [addComment] = useMutation(ADD_COMMENT, {
//     refetchQueries: [GET_POST_BY_POST_ID, 'getPostListByPostId'],
//   })
  const { register, handleSubmit, setValue } = useForm<FormData>()
//   const { data } = useQuery(GET_POST_BY_POST_ID, {
//     variables: {
//       post_id: postId,
//     },
//   })

//   const post: Post = data?.getPostListByPostId

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data)

    const notification = toast.loading('Posting your comment...')

    // await addComment({
    //   variables: {
    //     post_id: postId,
    //     username: session?.user?.name,
    //     text: data.comment,
    //   },
    // })

    setValue('comment', '')

    toast.success('Comment successfully posted!', {
      id: notification,
    })
  }

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />

      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">"Adam"</span>
        </p>

        <form
          className="flex max-w-5xl flex-col space-y-2"
        //   onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register('comment')}
            // disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50 resize-none"
            placeholder={
              true ? 'What are your thoughts?' : 'Please sign in to comment'
            }
          />

          <button
            // disabled={!session}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200 hover:bg-red-400 transition-colors"
          >
            Comment
          </button>
        </form>
      </div>

      <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />

        {post?.comments.map((comment) => (
          <div
            className="relative flex items-center space-x-2 space-y-5"
            key={post.id}
          >
            <hr className="absolute top-10 h-16 border left-7 z-0" />
            <div className="z-50">
              <Avatar seed={post.username} />
            </div>

            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-600">
                  {post.username}
                </span>{' '}
                · <TimeAgo date={post.created_at} />
              </p>
              <p>comment.text</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
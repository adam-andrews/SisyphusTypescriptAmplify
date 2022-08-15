import React from 'react'
import Post from './Post'

interface FeedProps {
  topic?: string
}

export default function Feed({ topic }: FeedProps) {

  const posts = [0,0,0]

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => (
        <Post/>
      ))}
    </div>
  )
}
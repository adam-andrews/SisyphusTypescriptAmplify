import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import Feed from '../components/Feed'
import PostBox from '../components/Postbox'
const Home: NextPage = () => {

  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit 2.0 Clone</title>
        </Head>
        <PostBox/>
        <Feed/>
    </div>
  )
}

export default Home
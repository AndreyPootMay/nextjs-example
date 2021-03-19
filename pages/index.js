import Head from 'next/head'
import Posts from '../src/components/home/posts'
import Layout from '../src/components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Next app!</title>
        <link rel="stylesheet" href="/favicon.ico"/>
      </Head>
      <Posts />
    </Layout>
  )
}

import Head from "next/head"
import Link from "next/link"
import MainLayout from "../components/MainLayout"

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Home page</title>
      </Head>
      <h1>Hello Next</h1>
      <p>lorem</p>
      <p>
        <Link href={'./about'}>About</Link>
      </p>
      <p>
        <Link href={'./posts'}>Posts</Link>
      </p>
    </MainLayout>

  )
}
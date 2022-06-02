import Head from "next/head";
import Link from "next/link";

export default function MainLayout({children, title= 'Next App'}) {
  return (
    <>
    <Head>
      <title>{title} | MainLayout </title>
    </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx global>{`
          nav {
            positon: fixed;
            height: 60px;
            left: 0;
            right: 0;
            background: orange;
            display: flex;
          }
          nav a { 
            color: #fff;
            margin: 5px 10px;
          }
        `}
      </style>
    </>
  )
}
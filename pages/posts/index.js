import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout";

export default function Posts({posts}){
 return <MainLayout>
  <h1>Posts</h1>
  {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
  <ul>
    {posts.map((post)=>(
      <li key={post.id}>
        <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}

  </ul>
 </MainLayout>
}

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    posts,
  };
}
// import { useRouter } from "next/router"

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Post({post: serverPost}) {
  // const router = useRouter()
  const [post, setPost] = useState([]);
  const  router = useRouter()

  useEffect(()=>{
    async function load() {
      const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await response.json();
      setPost(data);
    }

    if(!serverPost) {
      load();
    }
  }, [])

  if(!post) {
    return <>
      <p>Loading...</p>
    </>
  } 

  if(post) {
    return (
      <>
        <h1>{post.title}</h1>
        <hr />
        <p>{post.body}</p>
        <Link href={'/posts'}>
          <a>Back to posts</a>
        </Link>
      </>
    )
  }
}

Post.getInitialProps = async({query, req}) => {
  if(!req) {
    return {post: null}
  }

  const response = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post = await response.json();
  return {
    post,
  };
}

// export async function getServerSideProps({query, req}) {
//   if(!req) {
//     return {post: null}
//   }

//   const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//   const post = await response.json();
//   return {
//     props: {post},
//   };
// }
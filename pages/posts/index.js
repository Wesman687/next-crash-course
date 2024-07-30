import { useEffect, useState } from "react";
export async function getServerSideProps() {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }
}
export default function Posts({posts}) {
    
  return (
    <>
      <h1>This is the Posts Page</h1>

      {posts?.map(posts => {
        return <li key={posts.id}>{posts.title}</li>;
      })}
    </>
  );
}

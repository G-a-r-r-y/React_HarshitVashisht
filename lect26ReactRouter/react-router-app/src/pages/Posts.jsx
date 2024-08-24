import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";
import { redirect } from "react-router-dom";

export async function loader(args, { isLoggedIn }) {
  console.log(args);
  const url = new URL(args.request.url);
  const pathname = url.pathname;
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return redirect(`/Log?redirectedTo=${pathname}`);
  }

  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
}

export default function Posts() {
  const posts = useLoaderData();

  return (
    <>
      {posts &&
        posts.map((post) => {
          return <Post key={post.id} id={post.id} title={post.title} />;
        })}
    </>
  );
}

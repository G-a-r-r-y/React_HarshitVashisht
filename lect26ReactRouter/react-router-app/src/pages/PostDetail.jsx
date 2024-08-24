import { redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }, { isLoggedIn }) {
  if (!isLoggedIn) {
    return redirect("/Log");
  }

  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(`${url}/${params.id}`);
  const data = await response.json();
  return data;
}

function PostDetail() {
  const data = useLoaderData();
  return (
    <>
      {data && (
        <>
          <h2>Title :{data.title}</h2>
          <h1>id: {data.id}</h1>
        </>
      )}
    </>
  );
}

export default PostDetail;

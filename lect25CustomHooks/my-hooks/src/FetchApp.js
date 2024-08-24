import User from "./Components/User";
import useFetch from "./hooks/useFetch";

function FetchApp() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading === true) {
    return <div>Loading......</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data &&
        data.map((user) => {
          return <User {...user} key={user.id} />;
        })}
    </>
  );
}

export default FetchApp;

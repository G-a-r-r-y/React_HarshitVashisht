import { useState, useEffect } from "react";
import User from "./User";
const url = "https://jsonplaceholder.typicode.com/users";

function FetchData2() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    const response = await fetch(url);
    if (!(response.status >= 200 && response.status <= 299)) {
      setError = true;
      setErrorMsg(`${response.status} Error`);
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  if (error) {
    return <h1>{errorMsg}</h1>;
  }

  return (
    <div>
      {users.map((user) => {
        return <User key={user.id} {...user} />;
      })}
    </div>
  );
}

export default FetchData2;

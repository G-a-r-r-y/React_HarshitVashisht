import { useState, useEffect } from "react";
import User from "./User";
const url = "https://jsonplaceholder.typicode.com/users";

function AbortingNetWorkRequest() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
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
    fetchData();
    return () => {
      console.log("aborting request");
    };
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

export default AbortingNetWorkRequest;

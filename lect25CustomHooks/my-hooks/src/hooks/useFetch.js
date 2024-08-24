import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData(url) {
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw Error("Something went wrong");
        }
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(url);
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;

import React from "react";
import { useEffect } from "react";

function FetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  //   useEffect(() => {
  //     fetch(url)
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       });
  //   }, []);

  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <></>;
}

export default FetchData;

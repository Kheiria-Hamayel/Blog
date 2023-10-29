import { useEffect, useState } from "react";

// Custom hooks must start with word 'use'
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //can't use the async and await in useEffect instead
  // create external method or using promise
  useEffect(() => {
    fetch(url)
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw Error("Could not fetch data from resource");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
        setIsPending(false);
      });
  }, [url]);
  //[] means that useEffect is triggered only in initializing

  // return an object
  return { data, isPending, error };
};

export default useFetch;

import { useEffect, useState } from "react";

// Custom hooks must start with word 'use'
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //can't use the async and await in useEffect instead
  // create external method or using promise
  useEffect(() => {
    // const abortCont =
    //   new AbortController(); /*from this obj we could control the fetch operation */
    setTimeout(() => {
      fetch(
        url
        //     ,
        //     {
        //     signal: abortCont.signal,
        //   }
      ) /*Link the fetch with  AbortController*/
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
          if (e.name === "AbortError") {
            console.log("fetch aborted"); /*thses lines are
            for in case of error the catch will work and update states
            below so no point from cleanup until those lines are introduced */
          } else {
            setError(e.message);
            setIsPending(false);
          }
        });
    }, 1000);

    /*the idea behind cleanup is to stop the fetch in case the user press
    another component and at the same time the fetch didn't finish
    that's why sometimes got warning for "can't update unmounted component"
    */
    // return () => abortCont.abort(); /*pausing the fetch */
  }, [url]);
  //[] means that useEffect is triggered only in initializing

  // return an object
  return { data, isPending, error };
};

export default useFetch;

// the clean up details are commented due to errors with timeout
//since while waiting for 1 sec for timeout the aborted will got executed
// and it will through an AbortedError with no reason

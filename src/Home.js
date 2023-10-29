import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

export default function Home() {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);
  // //can't use the async and await in useEffect instead
  // // create external method or using promise
  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((res) => {
  //       // console.log(res);
  //       if (!res.ok) {
  //         throw Error("Could not fetch data from resource");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log(data);
  //       setBlogs(data);
  //       setIsPending(false);
  //       setError(null);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //       setError(e.message);
  //       setIsPending(false);
  //     });
  // }, []);
  // //[] means that useEffect is triggered only in initializing

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div> Loading ...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

// import { useState } from "react";

// export default function Home() {
//   // let name = "Kheiria";
//   const [name, setName] = useState("Kheiria");

//   const handleClick = () => {
//     console.log("Hi there");
//     setName("Hamayel");
//   };

//   const handleClickAgain = (name) => {
//     console.log("Hi there" + name);
//   };

//   return (
//     <div className="home">
//       <h2>Home Page</h2>
//       <p>{name}</p>
//       <button onClick={handleClick}>click me </button>
//       {/* <button
//         onClick={() => {
//           handleClickAgain("Mario");
//         }}
//       >
//         Click Again
//       </button> */}
//     </div>
//   );
// }

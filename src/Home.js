import { useEffect, useState } from "react";
import BlogList from "./BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  //can't use the async and await in useEffect instead
  // create external method or using promise
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBlogs(data);
        setIsPending(false);
      });
  }, []);
  //[] means that useEffect is triggered only in initializing

  return (
    <div className="home">
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

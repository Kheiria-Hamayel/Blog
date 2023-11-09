import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const handleOnclick = () => {
    fetch("http://localhost:8000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Lodding...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleOnclick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("KH");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); /*the default behave for the 
    form is to refresh when submit
    */

    const blog = { title, body, author }; /**no need 
    for id because the json serever is auto generate it */
    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" } /**sending json data */,
      body: JSON.stringify(blog) /**convert obj into string json */,
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
      //  history.go(-1); // -number redirect user to back with number of pages and the oppisite is right
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form
        onSubmit={handleSubmit} /**the button fires a submit event 
      where the form will listen for it
      */
      >
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title} /**vice versa with useState */
          onChange={(e) => setTitle(e.target.value)} /*e => event object */
        />

        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Amjad">Amjad</option>
          <option value="KH">KH</option>
        </select>
        {!isPending && <button>Add Blog </button>}
        {isPending && <button disabled>Adding Blog ... </button>}
      </form>
    </div>
  );
};

export default Create;

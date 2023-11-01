import { Link } from "react-router-dom";

{
  /*
            without links the requests are still send to browser 
            instead of making the broswer to handle the pages routing
            that's why the link is used instead of <a></a>
            */
}

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link> {/*<a href="/">Home</a> */}
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;

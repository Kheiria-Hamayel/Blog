import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            {" "}
            {/*the point from switch, when using routers the 
          it makes the comparison between routers to check the best match 
          in case no switch it may end up in two pages in one request
          */}
            <Route exact path="/">
              {" "}
              {/* the exact for matching 
            exact -> means without exact /create it matches with home
            route and render the home component
            */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              {/*id of blog */}
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

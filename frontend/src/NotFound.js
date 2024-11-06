import "./NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1 className="notFoundTitle">page not found</h1>
      <p className="notFoundLink">
        go back to <Link to={"/"}>Homepage</Link>
      </p>
    </div>
  );
}

export default NotFound;

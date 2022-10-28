import { Link } from "react-router-dom";
export let Error = () => {
  return (
    <>
      <h1 className="error-heading">oops! it's a dead end</h1>;
      <Link to="/">
        <button className="home-btn">back home</button>
      </Link>
    </>
  );
};

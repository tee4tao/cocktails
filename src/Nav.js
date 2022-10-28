import logo from "./logo.svg";
import { Outlet, Link } from "react-router-dom";
export let Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="the cocktail" className="nav-logo" />
          </Link>
          <div className="nav-links">
            <div className="link">
              <Link to="/">home</Link>
            </div>
            <div className="link">
              <Link to="/about">about</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/"
              >
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Podcasts"
              >
                Podcasts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Movies"
              >
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;

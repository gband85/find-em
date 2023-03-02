import { Outlet, Link } from "react-router-dom";

const Root = (props) => {
  return (
    <>
      <div className="navbar">
        <h1 className="navbar__brand">
          <Link to="/">
            Find 'Em
          </Link>
        </h1>

        <nav className="navbar__nav">
          <ul className="navbar__nav__list">
            <li className="menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/puzzles" className="nav-link">
                Puzzles
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
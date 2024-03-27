import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <div className="md:flex gap-6">
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/listedbooks">Listed Pages</NavLink>
        </li>
        <li>
          <NavLink to="/pagestoread">Pages To Read</NavLink>
        </li>
        <li>
          <NavLink to="/upcomingbooks">Upcoming Books</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
      </>
    </div>
  );
  return (
    <div className="text-center md:navbar bg-base-100 py-4">
      <div className="md:navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <p className="btn btn-ghost text-3xl font-bold text-red-600">
            Books Valley
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="md:navbar-end gap-5">
        <a className="btn bg-green-500 text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;

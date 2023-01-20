import React from "react";

import { Link, useResolvedPath, useMatch } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="Head">Bus Transit Service</h1>
      <ul className="NavMenu">
        <li>
          <Link to="/landing" className="NavLinks">
            Travel
          </Link>
        </li>
        <li>
          <CustomLink to="/Aboutus" className="NavLinks">
            AboutUs
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/login" className="NavLinksa">
            Admin side
          </CustomLink>
        </li>
        <li>
          <Link to="/signup" className="NavLinksb">
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default Navbar;

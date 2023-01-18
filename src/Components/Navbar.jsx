import React from "react";

import { Link } from "react-router-dom";

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
          <Link to="/login" className="NavLinksa">
            Admin LogIn
          </Link>
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

// function Link({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to);
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true });

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }
export default Navbar;

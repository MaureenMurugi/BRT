import React from 'react'

import { Link, useMatch, useResolvedPath } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className='NavbarItems'>
            <h1>Bus Transit Service</h1>
        <ul className='NavMenu'>
          <li>
            <CustomLink to="/landing" className='NavLinls'> Home</CustomLink>
          </li>
        </ul>
      </nav>
    );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar
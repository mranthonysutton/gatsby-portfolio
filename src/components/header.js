import React from "react";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">Anthony Sutton</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

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
          <li>Home</li>
          <li>My Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

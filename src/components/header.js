import React from "react";
import { Link } from "gatsby";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              to="/"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

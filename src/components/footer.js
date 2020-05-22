import React from "react";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  const yearDate = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <p>Created by Anthony Sutton. &copy; {yearDate}</p>
    </footer>
  );
};

export default Footer;

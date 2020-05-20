import React from "react";

const Footer = () => {
  const yearDate = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Anthony Sutton. &copy; {yearDate}</p>
    </footer>
  );
};

export default Footer;

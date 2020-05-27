import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import footerStyles from "./footer.module.scss";

const Footer = () => {
  const yearDate = new Date().getFullYear();
  return (
    <footer className={footerStyles.footer}>
      <p>Created by Anthony Sutton. &copy; {yearDate}</p>
      <section className={footerStyles.iconContainer}>
        <a
          href="https://github.com/mranthonysutton"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.iconLink}
        >
          <FaGithub size="1.4rem" />
        </a>
        <a
          href="https://www.linkedin.com/in/mranthonysutton/"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.iconLink}
        >
          <FaLinkedin size="1.4rem " />
        </a>
        <a
          href="mailto:anthony.sutton95@gmail.com"
          target="+blank"
          rel="noopener noreferrer"
          className={footerStyles.iconLink}
        >
          <FaEnvelope size="1.4rem " />
        </a>
      </section>
    </footer>
  );
};

export default Footer;

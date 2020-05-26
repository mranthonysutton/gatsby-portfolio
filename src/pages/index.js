import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Skills from "../components/Skills";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>About Me</h2>
      <p>
        My name is Anthony Sutton and I am a full-stack web developer.
        Full-Stack Web Developer that utilizes HTML, CSS, JavaScript, React,
        NodeJS, Express and Python to develop applications. Comfortable with
        Windows, Mac, and various Linux-based distros such as Ubuntu, Mint,
        Debian, Fedora, and Arch. When not developing, I enjoy outdoor
        activities with my wife and two dogs. We like to go hiking, camping, and
        boating.
      </p>

      <Skills />
    </Layout>
  );
};

export default IndexPage;

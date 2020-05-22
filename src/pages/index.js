import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h2>About Me</h2>
      <p>My name is Anthony Sutton and I am a full-stack web developer.</p>
    </Layout>
  );
};

export default IndexPage;

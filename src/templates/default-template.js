import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Head from "../components/head";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;

const DefaultTemplate = ({ data: { mdx: page } }) => {
  return (
    <Layout>
      <Head title={page.frontmatter.title} />
      <h2>{page.frontmatter.title}</h2>
      <MDXRenderer>{page.body}</MDXRenderer>
    </Layout>
  );
};

export default DefaultTemplate;

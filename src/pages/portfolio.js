import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Head from "../components/head";

const PortfolioPage = () => {
  const portfolioData = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { template: { eq: "portfolio" } } }) {
        edges {
          node {
            frontmatter {
              title
              template
              github
              url
              description
            }
            body
          }
        }
      }
    }
  `);

  const portfolios = portfolioData.allMdx.edges;

  return (
    <Layout>
      <Head title="Portfolio" />
      {portfolios.map((portfolio) => (
        <div key={portfolio.node.frontmatter.title}>
          <h3>{portfolio.node.frontmatter.title}</h3>
          <p>{portfolio.node.frontmatter.description}</p>
          <MDXRenderer>{portfolio.node.body}</MDXRenderer>
          <div>
            <a href={portfolio.node.frontmatter.github}>View on GitHub</a>
            <a href={portfolio.node.frontmatter.url}>View live demo</a>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default PortfolioPage;

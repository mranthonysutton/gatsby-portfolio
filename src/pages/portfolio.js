import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";
import Head from "../components/head";
import portfolioStyles from "./portfolio.module.scss";

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
          <div className={portfolioStyles.buttonContainer}>
            <a
              href={portfolio.node.frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View on GitHub</button>
            </a>
            <a
              href={portfolio.node.frontmatter.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View live demo</button>
            </a>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default PortfolioPage;

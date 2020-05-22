exports.createPages = async ({ actions, graphql, reporter }) => {
  const results = await graphql(`
    query {
      allMdx(filter: { frontmatter: { template: { eq: "default" } } }) {
        nodes {
          frontmatter {
            title
            slug
          }
          body
        }
      }
    }
  `);

  if (results.errors) {
    reporter.panic("Failed to gather data: ", results.errors);
  }

  const data = results.data.allMdx.nodes;

  data.forEach((page) => {
    actions.createPage({
      path: page.frontmatter.slug,
      component: require.resolve("./src/templates/default-template.js"),
      context: {
        slug: page.frontmatter.slug,
      },
    });
  });
};

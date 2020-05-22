module.exports = {
  siteMetadata: {
    title: "Anthony Sutton, Full Stack Web Developer",
    author: "Anthony Sutton",
    linkedin: "https://www.linkedin.com/in/mranthonysutton/",
    github: "https://github.com/mranthonysutton",
    email: "anthony.sutton95@gmail.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`,
        ignore: [`**/\.*`],
      },
    },
  ],
};

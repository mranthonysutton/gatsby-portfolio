module.exports = {
  siteMetadata: {
    title: "Anthony Sutton, Full Stack Web Developer",
    linkedin: "https://www.linkedin.com/in/mranthonysutton/",
    github: "https://github.com/mranthonysutton",
    email: "anthony.sutton95@gmail.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`],
      },
    },
  ],
};

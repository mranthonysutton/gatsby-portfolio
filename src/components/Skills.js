import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import skillStyles from "./skills.module.scss";

const Skills = () => {
  const skillImages = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "skills" } }) {
        edges {
          images: node {
            id
            name
            childImageSharp {
              fixed(width: 64, height: 64) {
                src
              }
            }
          }
        }
      }
    }
  `);

  const images = skillImages.allFile.edges;

  return (
    <>
      <h2>Skills</h2>
      <div className={skillStyles.imgContainer}>
        {images.map((image) => (
          <div className={skillStyles.skillCard} key={image.images.id}>
            <img
              alt={image.images.name}
              src={image.images.childImageSharp.fixed.src}
            />
            <p>{image.images.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;

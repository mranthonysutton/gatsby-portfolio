import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import heroStyles from "./hero.module.scss";

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "AnthonySutton_hero.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <div className={heroStyles.wrapper}>
      <Img
        fixed={image.childImageSharp.fixed}
        alt="test"
        className={heroStyles.img}
      />
      <h1 className={heroStyles.heading}>Anthony Sutton</h1>
      <p className={heroStyles.blurb}>Full-Stack Web Developer</p>
    </div>
  );
};

export default Hero;

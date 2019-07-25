import React from 'react';
import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment HeroSection on WordPress_Page_Pagesectionfields_Sections_Hero {
    backgroundColor
    buttonLink
    buttonText
    description
    title
  }
`;

const Hero = ({
  backgroundColor,
  buttonLink,
  buttonText,
  description,
  title
}) => (
  <section
    style={{
      backgroundColor,
      color: 'white',
      padding: '3em'
    }}
  >
    <h1>{title}</h1>
    <p>{description}</p>
    <a href={buttonLink} style={{ color: 'white' }}>
      {buttonText}
    </a>
  </section>
);

export default Hero;

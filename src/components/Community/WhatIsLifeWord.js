import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Element } from "react-scroll";
// import Img from "gatsby-image";

const WhatIsLifeWord = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsWhatIsLifeWordNation {
        description
      }
    }
  `);

  return (
    <Element
      name="whatIsLWN"
      className="flex flex-col my-6 md:my-10 mx-2 md:mx-5"
    >
      <h1 className="mx-auto font-bold text-xl md:text-2xl my-3 bg-blue-back-500 px-2 py-1 text-white">
        What is Life Word?
      </h1>

      <p className="mx-2 md:mx-5 my-4 text-justify">
        {data.graphCmsWhatIsLifeWordNation.description}
      </p>
    </Element>
  );
};

export default WhatIsLifeWord;

import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Element } from "react-scroll";
// import Img from "gatsby-image";

const VisionOfTheChurch = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsVisionOfTheChurch {
        description
      }
    }
  `);

  return (
    <Element name="vision" className="flex flex-col my-6 md:my-10 mx-2 md:mx-5">
      <h1 className="mx-auto font-bold text-xl md:text-2xl my-3 bg-blue-back-500 px-2 py-1 text-white">
        Vision of the Church
      </h1>

      <p className="mx-2 md:mx-auto my-4 text-justify">
        {data.graphCmsVisionOfTheChurch.description}
      </p>
    </Element>
  );
};

export default VisionOfTheChurch;

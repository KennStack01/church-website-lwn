import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const WhoAreWe = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsAboutWhoWeAre {
        description
        image {
          url
        }
      }
    }
  `);

  return (
    <div className="flex flex-col my-6 md:my-10 mx-2 md:mx-5">
      <h1 className="mx-auto font-bold text-xl md:text-2xl  my-3 bg-blue-back-500 px-2 py-1 text-white">
        Who We are as LWN
      </h1>
      <div className=" md:mx-6">
        <img
          src={data.graphCmsAboutWhoWeAre.image.url}
          alt="Who we are"
          className="rounded-3xl"
        />
      </div>
      <p className="mx-2 md:mx-5 my-4 text-justify">
        {data.graphCmsAboutWhoWeAre.description}
      </p>
    </div>
  );
};

export default WhoAreWe;

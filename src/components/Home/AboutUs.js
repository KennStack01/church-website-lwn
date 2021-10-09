import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsShortDescriptionOfTheMission {
        description
        backgroundPicture {
          url
        }
      }
    }
  `);

  return (
    <div className="w-full relative text-white ">
      <img
        src={data.graphCmsShortDescriptionOfTheMission.backgroundPicture.url}
        loading="lazy"
        placeholder="blurred"
        className="w-full relative md:h-70 inset-0 bg-cover bg-center z-0 filter brightness-50"
      />
      <h1 className="absolute z-30 inset-0 font-bold text-xl md:text-4xl text-center mt-4 md:mt-6">
        Life Word Nation
      </h1>
      <p className="absolute mx-3 md:mx-auto md:w-2/3 inset-0 flex justify-center items-center text-sm md:text-lg text-justify font-semibold z-10">
        {" "}
        {data.graphCmsShortDescriptionOfTheMission.description}{" "}
      </p>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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
    <div>
      <div className="w-full relative text-white ">
        <img
          src={data.graphCmsShortDescriptionOfTheMission.backgroundPicture.url}
          loading="lazy"
          placeholder="blur"
          className="w-full relative h-48 md:h-60 inset-0 object-cover bg-center z-0 filter brightness-50"
        />
        <h1 className="absolute z-30 inset-0 font-bold text-md md:text-lg text-center mt-4 md:mt-6">
          Life Word Nation
        </h1>
        <p className="absolute mx-3 mt-5 md:mx-auto md:w-2/3 inset-0 flex justify-center items-center text-sm md:text-lg text-justify font-medium z-10">
          {" "}
          {data.graphCmsShortDescriptionOfTheMission.description.substring(
            0,
            150
          )}
          {"..."}
        </p>
      </div>
      <Link
        to="/community"
        className="flex flex-row font-semibold mx-auto w-24 p-2 text-blue-back-500 bg-new-yellow-600 hover:bg-new-yellow-700 rounded -mt-6 z-10 relative"
      >
        About Us
      </Link>
    </div>
  );
};

export default AboutUs;

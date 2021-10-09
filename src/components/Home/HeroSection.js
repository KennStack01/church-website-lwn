import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { BiDoorOpen } from "react-icons/bi";

const HeroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsBackgroundVideo {
        shortChurchVideo {
          url
        }
      }
      graphCmsWelcomeText {
        welcomeTo
        nameOfTheMinistry
        descriptionText
      }
    }
  `);

  return (
    <section className="top-0 relative flex flex-col items-center justify-center h-screen w-full mb-12 overflow-hidden">
      <div className="relative flex flex-col z-30 p-5 text-2xl text-white bg-opacity-100 rounded-xl">
        <h3 className="text-2xl md:text-5xl font-semibold">
          {data.graphCmsWelcomeText.welcomeTo}
        </h3>
        <h1 className="text-4xl md:text-8xl font-bold">
          {data.graphCmsWelcomeText.nameOfTheMinistry}
        </h1>
        <p className="text-xs md:text-sm my-4 w-3/4 md:w-1/2 font-medium">
          {data.graphCmsWelcomeText.descriptionText}
        </p>
      </div>
      <Link
        to="/contact"
        className="flex flex-row text-left z-30 relative bg-new-yellow-500 hover:bg-new-yellow-600 rounded text-blue-back-400 p-3"
      >
        <h3 className="text-md md:text-xl font-semibold">Join Us</h3>
        <div className="text-xl my-auto">
          <BiDoorOpen />
        </div>
      </Link>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-full filter brightness-50"
      >
        <source
          src={data.graphCmsBackgroundVideo.shortChurchVideo.url}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default HeroSection;

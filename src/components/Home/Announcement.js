import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Announcement = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsChurchAnnouncement {
        title
        description
        link
      }
    }
  `);

  console.log(data);
  return (
    <div className="bg-blue-back-500 w-full py-4 text-white">
      <h1 className="bg-new-yellow-500 w-4/12 md:w-2/12 text-blue-back-400 text-center font-semibold p-3">
        Announcement
      </h1>
      <div className="flex flex-col mx-auto text-justify">
        <h1 className="text-center font-bold my-3 text-2xl">
          {" "}
          {data.graphCmsChurchAnnouncement.title}{" "}
        </h1>
        <p className="text-sm md:text-md text-justify mx-3 md:mx-auto md:w-3/4">
          {data.graphCmsChurchAnnouncement.description}
        </p>
        <a
          href={data.graphCmsChurchAnnouncement.link}
          target="__blank"
          className="flex flex-row p-2 mx-auto my-5 text-blue-back-500 font-semibold text-center w-28 rounded bg-white"
        >
          <h3 className="my-auto">Discover</h3>
          <div className="text-2xl my-auto">
            <BsBoxArrowUpRight />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Announcement;

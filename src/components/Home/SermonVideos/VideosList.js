import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Video from "./Video";
// import { fetchYoutube } from "./fetchYoutube";

const VideosList = () => {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsSermonVideo(sort: { fields: publishedAt, order: ASC }) {
        edges {
          node {
            videoTitle
            videoSrcUrl
          }
        }
      }
    }
  `);
  let count = 0;

  return (
    <div className="flex flex-col mx-auto my-8 md:my-14">
      <h1 className="font-bold text-3xl text-center">Online Sermons</h1>
      <div className="flex flex-col md:grid grid-cols-2 place-items-center place-content-center mx-3 md:mx-10">
        {data.allGraphCmsSermonVideo.edges.map((video) => (
          <Video
            key={count++}
            videoTitle={video.videoTitle}
            videoSrcURL={video.videoSrcURL}
          />
        ))}
      </div>
    </div>
  );
};

export default VideosList;

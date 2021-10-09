import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Video from "./Video";

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

  return (
    <div className="flex flex-col mx-auto my-8 md:my-14">
      <h1 className="font-bold text-3xl text-center">Online Sermons</h1>
      <div className="flex flex-col md:grid grid-cols-2 place-items-center place-content-center mx-3 md:mx-10">
        {data.allGraphCmsSermonVideo.edges.map((video) => (
          <Video
            key={video.videoSrcUrl}
            videoTitle={video.videoTitle}
            videoSrcURL="https://www.youtube.com/watch?v=fjjqzivJQqs"
          />
          // <Video
          //   key={video.videoSrcUrl}
          //   videoTitle={video.videoTitle}
          //   videoSrcURL={video.videoSrcURL}
          // />
        ))}
      </div>
    </div>
  );
};

export default VideosList;

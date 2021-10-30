import React from "react";
import { useStaticQuery, graphql } from "gatsby";

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
      <div className="flex flex-col md:grid grid-cols-2 place-items-center place-content-center mx-3 md:mx-5">
        {data.allGraphCmsSermonVideo.edges.map((video) => {
          const videoID = video.node.videoSrcUrl.replace(
            "https://www.youtube.com/watch?v=",
            ""
          );
          const URL = `https://www.youtube.com/embed/${videoID}`;
          const videoTitle = video.node.videoTitle;

          return (
            <iframe
              key={count++}
              src={URL}
              title={videoTitle}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              className="rounded-lg mx-3 my-8 w-full md:w-5/6 h-80"
            />
          );
        })}
      </div>
    </div>
  );
};

export default VideosList;

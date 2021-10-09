/* eslint-disable react/prop-types */
import React from "react";
// import YouTube from "react-youtube";
// import ReactPlayer from "react-player/youtube";

const Video = ({ videoSrcURL = "", videoTitle }) => {
  const videoID = videoSrcURL.replace("https://www.youtube.com/watch?v=", "");
  const URL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <iframe
      src={URL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      // height="320"
      // width="500"
      className="rounded-lg mx-3 my-4 md:my-8 w-full md:w-5/6"
    />
    // <div className="my-4 md:my-8">
    //   <ReactPlayer url={URL} />
    //   {/* <YouTube videoId={videoID} /> */}
    // </div>
  );
};
export default Video;

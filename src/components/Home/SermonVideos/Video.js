/* eslint-disable react/prop-types */
import React from "react";
// import YouTube from "react-youtube";

const Video = ({ videoSrcURL = "", videoTitle }) => {
  const videoID = videoSrcURL.replace("https://www.youtube.com/watch?v=", "");
  const URL = `https://www.youtube.com/embed/${videoID}`;

  return (
    <div className="my-5 mx-3">
      <iframe
        src={URL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        height="320"
        width="500"
        className="rounded-lg"
      />
      {/* <YouTube videoId={videoID} /> */}
    </div>
  );
};
export default Video;

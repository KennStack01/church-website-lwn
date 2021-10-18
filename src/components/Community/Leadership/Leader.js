/* eslint-disable react/prop-types */
import React from "react";

const Leader = ({ profilePictureURL, name, role }) => {
  return (
    <div className="flex flex-col mx-8 my-4 md:my-8 md:mx-10">
      <img
        src={profilePictureURL}
        alt="Church Overseer"
        className="rounded-2xl"
      />
      <h1 className="text-md text-center font-semibold"> {name} </h1>
      <h4 className="text-center text-sm font-light"> {role} </h4>
    </div>
  );
};

export default Leader;

/* eslint-disable react/prop-types */
import React from "react";

const Overseer = ({
  profilePictureURL,
  pastorName,
  churchName,
  churchAddress,
  phoneNumber1,
  phoneNumber2,
}) => {
  return (
    <div className="flex flex-col mx-5 my-4 md:my-8">
      <img
        src={profilePictureURL}
        alt="Church Overseer"
        className="rounded-xl"
      />
      <h1 className="text-md text-center font-semibold"> {pastorName} </h1>
      <div className="text-xs text-center font-normal mx-2">
        <p className="text-md font-medium my-1"> {churchName} </p>
        <p className="">
          <span className="">{`Contact: ${phoneNumber1} | ${phoneNumber2}`}</span>
        </p>
        <p> {`Address: ${churchAddress}`} </p>
      </div>
    </div>
  );
};

export default Overseer;

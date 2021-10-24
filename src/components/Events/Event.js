/* eslint-disable react/prop-types */
import React from "react";
import Moment from "react-moment";

const Event = ({
  startingDate,
  endDate,
  imageURL,
  title,
  description,
  eventLink,
}) => {
  Moment.globalFormat = "D MMM YYYY";

  return (
    <div className=" md:grid grid-cols-7 bg-gray-100 p-2 mx-2 md:mx-10 my-3 md:my-5 shadow-sm rounded-lg">
      <div className="flex flex-col text-xs text-right md:text-left my-2 text-gray-700 md:my-auto">
        <p>
          From <br />{" "}
          <Moment className=" font-semibold text-xl" date={startingDate} />{" "}
        </p>
        <p>
          To <br /> <Moment className=" font-semibold text-xl" date={endDate} />{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row my-auto col-span-6">
        <div className="flex flex-col md:w-4/5">
          <a
            href={eventLink}
            target="__blank"
            className="md:my-auto text-xl my-4 font-bold hover:underline hover:text-blue-back-400"
          >
            <h2> {title} </h2>
          </a>
          <p className="my-2 md:my-3">
            {" "}
            {description.substring(0, 200)}
            {"..."}{" "}
          </p>
        </div>
        <img
          src={imageURL}
          alt="Event Cover Image"
          className="md:w-1/5 object-cover rounded-xl my-2 md:my-0"
        />
      </div>
    </div>
  );
};

export default Event;

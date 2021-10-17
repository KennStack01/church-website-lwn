/* eslint-disable react/prop-types */
import React from "react";

const QRCode = ({ name, QRCodePictureURL, indicationText }) => {
  return (
    <div className="flex flex-col mx-auto py-8 md:py-12">
      <h1 className="text-center mx-auto font-semibold text-xl text-gray-700 text-blue-back-600">
        {" "}
        {name}{" "}
      </h1>
      <img
        src={QRCodePictureURL}
        alt="QR Code"
        className="rounded-lg  mx-auto"
      />
      <p className="text-xs text-center font-semibold text-gray-700">
        {indicationText}
      </p>
    </div>
  );
};

export default QRCode;

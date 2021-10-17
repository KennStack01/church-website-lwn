/* eslint-disable react/prop-types */
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

const PaymentLink = ({ name, paymentLink, indicationText }) => {
  return (
    <div className="flex flex-col mx-auto py-8 md:py-12">
      <h1 className="text-center mx-auto my-4 font-semibold text-xl text-gray-700">
        {" "}
        {name}{" "}
      </h1>
      <a
        href={paymentLink}
        target="__blank"
        className="flex flex-row justify-center mb-3 md:mb-4 mx-auto w-60 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-md shadow-sm hover:shadow-md p-3"
      >
        <h3 className="my-auto mx-2 text-md font-semibold">Open and Pay</h3>
        <BsBoxArrowUpRight className="text-3xl my-auto" />
      </a>
      <p className="text-xs text-center font-semibold text-gray-700">
        {indicationText}
      </p>
    </div>
  );
};

export default PaymentLink;

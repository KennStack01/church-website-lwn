/* eslint-disable react/prop-types */
import React from "react";

const BankInfos = ({
  countryName = "",
  bankName = "",
  accountName = "",
  accountNumber = "",
  branchCode = "",
  swiftCode = "",
  mobileMoney1 = "",
  mobileMoney2 = "",
}) => {
  return (
    <div className="flex flex-col mx-auto md:mx-5">
      <h1 className="mx-auto font-bold text-md md:text-lg my-3 bg-blue-back-500 px-2 py-1 text-white">
        {" "}
        {countryName}{" "}
      </h1>
      <h3 className="text-sm">
        {" "}
        Bank Name: <span className="font-medium">{bankName}</span>{" "}
      </h3>
      <h3 className="text-sm">
        {" "}
        Account Name: <span className="font-medium">{accountName}</span>{" "}
      </h3>
      <h3 className="text-sm">
        {" "}
        Account Name: <span className="font-medium">{accountNumber}</span>{" "}
      </h3>
      <h3 className="text-sm">
        {" "}
        Branch Code: <span className="font-medium">{branchCode}</span>{" "}
      </h3>
      <h3 className="text-sm">
        {" "}
        Swift Code: <span className="font-medium">{swiftCode}</span>{" "}
      </h3>
      <div className="flex flex-col my-3 text-xs text-gray-700">
        <h3 className="font-medium">{mobileMoney1}</h3>
        <h3 className="font-medium">{mobileMoney2}</h3>
      </div>
    </div>
  );
};

export default BankInfos;

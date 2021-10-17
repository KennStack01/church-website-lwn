import React from "react";
import { BiScan } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa";
import { RiWechatPayFill } from "react-icons/ri";
import { AiFillAlipayCircle } from "react-icons/ai";

const MobilePay = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-2">
      {/* WeChat */}
      <div className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer">
        <div className="text-6xl" style={{ color: "#5CC928" }}>
          <RiWechatPayFill />
        </div>
        <div className="my-auto mx-auto">
          <h1 className="text-xl font-bold text-gray-700">WeChat Pay</h1>
          <p className="font-semibold text-xs text-gray-400">
            For WeChat Users
          </p>
        </div>
        <div className="text-4xl my-auto text-gray-600">
          <BiScan />
        </div>
      </div>

      {/* AliPay */}
      <div className="flex flex-row justify-evenly mx-5 my-4  shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer">
        <div className="text-6xl" style={{ color: "#0e9dec" }}>
          <AiFillAlipayCircle />
        </div>
        <div className="my-auto mx-auto">
          <h1 className="text-xl font-bold text-gray-700">AliPay</h1>
          <p className="font-semibold text-xs text-gray-400">
            For AliPay Users
          </p>
        </div>
        <div className="text-4xl my-auto text-gray-600">
          <BiScan />
        </div>
      </div>

      {/* PayPal */}
      <div className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer">
        <div className="text-6xl" style={{ color: " #3b7bbf" }}>
          <FaPaypal />
        </div>
        <div className="my-auto mx-auto">
          <h1 className="text-xl font-bold text-gray-700">PayPal</h1>
          <p className="font-semibold text-xs text-gray-400">
            For PayPal Users
          </p>
        </div>
        <div className="text-4xl my-auto text-gray-600">
          <BiScan />
        </div>
      </div>
    </div>
  );
};

export default MobilePay;

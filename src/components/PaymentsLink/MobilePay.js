import React, { useState, Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Dialog, Transition } from "@headlessui/react";
import { BiScan } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa";
import { RiWechatPayFill } from "react-icons/ri";
import { AiFillAlipayCircle } from "react-icons/ai";
import QRCode from "./QRCode";

const MobilePay = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsPaymentLink {
        weChatQrCode {
          url
        }
        payPalQrCode {
          url
        }
        aliPayQrCode {
          url
        }
        lifePayLink
      }
    }
  `);

  let [isWeChatQRCodeOpen, setIsWeChatQRCodeOpen] = useState(false);
  function closeWeChatQRCodeModal() {
    setIsWeChatQRCodeOpen(false);
  }
  function openWeChatQRCodeModal() {
    setIsWeChatQRCodeOpen(true);
  }

  let [isAliPayQRCodeOpen, setIsAliPayQRCodeOpen] = useState(false);
  function closeAliPayQRCodeModal() {
    setIsAliPayQRCodeOpen(false);
  }
  function openAliPayQRCodeModal() {
    setIsAliPayQRCodeOpen(true);
  }

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-semibold text-center">
        Partner with us
      </h1>
      <div className="flex flex-col md:grid grid-cols-2 md:mx-36">
        {/* WeChat */}
        <div
          onClick={openWeChatQRCodeModal}
          className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer"
        >
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
        <div
          onClick={openAliPayQRCodeModal}
          className="flex flex-row justify-evenly mx-5 my-4  shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer"
        >
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

      {/* WeChat Modal */}
      <Transition appear show={isWeChatQRCodeOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeWeChatQRCodeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block z-50 w-full max-w-md my-8 px-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <QRCode
                  name="Using WeChat Pay"
                  indicationText="Please, Scan this QR Code"
                  QRCodePictureURL={data.graphCmsPaymentLink.weChatQrCode.url}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* AliPay Modal */}
      <Transition appear show={isAliPayQRCodeOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeAliPayQRCodeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur-sm" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block z-50 w-full max-w-md my-8 px-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <QRCode
                  name="Using AliPay"
                  indicationText="Please, Hold and/or Scan this QR Code"
                  QRCodePictureURL={data.graphCmsPaymentLink.aliPayQrCode.url}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobilePay;

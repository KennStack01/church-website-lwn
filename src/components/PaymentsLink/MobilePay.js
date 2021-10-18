import React, { useState, Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Dialog, Transition } from "@headlessui/react";
import { BiScan } from "react-icons/bi";
import { FaPaypal } from "react-icons/fa";
import { RiWechatPayFill, RiBankLine } from "react-icons/ri";
import { AiFillAlipayCircle } from "react-icons/ai";
import QRCode from "./QRCode";
import PaymentLink from "./PaymentLink";
import BankInfos from "./BankInfos";

const MobilePay = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsPaymentLink {
        weChatQrCode {
          url
        }
        aliPayQrCode {
          url
        }
        payPalLink
        lifePayLink
      }
      allGraphCmsBankAndMobilePayment {
        edges {
          node {
            country
            bankName
            accountName
            accountNumber
            branchCode
            swiftCode
            mobileMoney1
            mobileMoney2
            id
          }
        }
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

  let [isPayPalLinkOpen, setIsPayPalLinkOpen] = useState(false);
  function closePayPalLinkModal() {
    setIsPayPalLinkOpen(false);
  }
  function openPayPalLinkModal() {
    setIsPayPalLinkOpen(true);
  }

  let [isBankInfosOpen, setBankInfosOpen] = useState(false);
  function closeBankInfosModal() {
    setBankInfosOpen(false);
  }
  function openBankInfosModal() {
    setBankInfosOpen(true);
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
            <p className="font-semibold text-center text-xs text-gray-400">
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
            <p className="font-semibold text-center text-xs text-gray-400">
              For AliPay Users
            </p>
          </div>
          <div className="text-4xl my-auto text-gray-600">
            <BiScan />
          </div>
        </div>

        {/* PayPal */}
        <div
          onClick={openPayPalLinkModal}
          className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer"
        >
          <div className="text-6xl" style={{ color: " #3b7bbf" }}>
            <FaPaypal />
          </div>
          <div className="my-auto mx-auto">
            <h1 className="text-xl font-bold text-gray-700">PayPal</h1>
            <p className="font-semibold text-center text-xs text-gray-400">
              For PayPal Users
            </p>
          </div>
          <div className="text-4xl my-auto text-gray-600">
            <BiScan />
          </div>
        </div>

        {/* Using Bank Transfer */}
        <div
          onClick={openBankInfosModal}
          className="flex flex-row justify-evenly mx-5 my-4 shadow-md p-3 rounded-md rounded-l-none border-l-8 border-gray-600 bg-white hover:bg-gray-50 hover:shadow-lg cursor-pointer"
        >
          <div className="text-6xl text-green-600">
            <RiBankLine />
          </div>
          <div className="my-auto mx-auto">
            <h1 className="text-xl font-bold text-gray-700"> Bank Transfer </h1>
            <p className="font-semibold text-center text-xs text-gray-400">
              For Bank and Mobile Transfer
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

      {/* PayPal Modal */}
      <Transition appear show={isPayPalLinkOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closePayPalLinkModal}
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
                <PaymentLink
                  name="Using PayPal"
                  paymentLink={data.graphCmsPaymentLink.payPalLink}
                  indicationText="Please, Click and Pay using PayPal"
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Bank Info Modal */}
      <Transition appear show={isBankInfosOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeBankInfosModal}
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
              <div className="inline-block place-content-between z-50 w-full max-w-md my-8 px-3 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {data.allGraphCmsBankAndMobilePayment.edges.map((bank) => (
                  <BankInfos
                    key={bank.node.id}
                    countryName={bank.node.country}
                    bankName={bank.node.bankName}
                    accountName={bank.node.accountName}
                    accountNumber={bank.node.accountNumber}
                    branchCode={bank.node.branchCode}
                    swiftCode={bank.node.swiftCode}
                    mobileMoney1={bank.node.mobileMoney1}
                    mobileMoney2={bank.node.mobileMoney2}
                  />
                ))}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobilePay;

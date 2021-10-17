import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo-text-lwn.png";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoYoutube,
} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="flex flex-col divide-y divide-white text-sm md:text-md text-white bg-blue-back-500 w-full py-5">
      <div className="mx-auto flex flex-col md:flex-row justify-between ">
        <div className="mx-auto">
          <img
            src={logo}
            alt="Logo Life Word Nation"
            width={200}
            placeholder="blur"
          />
        </div>
        <div className="flex flex-row justify-between my-4 md:my-auto mx-1 md:mr-24 md:mx-10">
          <div className="flex flex-col mx-3 md:mx-5">
            <Link to="/" className="hover:text-yellow-400">
              Welcome
            </Link>
            <Link to="/community" className="hover:text-yellow-400">
              Community
            </Link>
          </div>
          <div className="flex flex-col mx-3 md:mx-5">
            <Link to="/bibleSchool" className="hover:text-yellow-400">
              Bible School
            </Link>
            <Link to="/community" className="hover:text-yellow-400">
              Resources
            </Link>
          </div>
          <div className="flex flex-col mx-3 md:mx-5">
            <Link to="/give" className="hover:text-yellow-400">
              Partner
            </Link>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-row md:flex-col mx-auto md:my-auto my-5">
          <div className="cursor-pointer my-1 md:my-2">
            <a
              href="https://www.facebook.com/lifewordministriesinternational/"
              target="__blank"
              className="flex flex-row mx-2 md:mx-1 hover:text-yellow-400"
            >
              <div className="text-3xl md:text-4xl">
                <IoLogoFacebook />
              </div>
              <p className="text-xs md:text-md my-auto mx-3 hidden md:block">
                {" "}
                LifeWord Ministries Int.{" "}
              </p>
            </a>
          </div>
          <div className="cursor-pointer my-1 md:my-2">
            <a
              href="https://instagram.com/lifewordgospel?utm_medium=copy_link"
              target="__blank"
              className="flex flex-row mx-2 md:mx-1 hover:text-yellow-400"
            >
              <div className="text-3xl md:text-4xl">
                <IoLogoInstagram />
              </div>
              <p className=" text-xs md:text-md my-auto mx-3 hidden md:block">
                {" "}
                @LifeWordNation{" "}
              </p>
            </a>
          </div>
          <div className="cursor-pointer my-1 md:my-2">
            <a
              href="https://www.youtube.com/channel/UColw4smJYwUTsavkxVPIcFg"
              target="__blank"
              className="flex flex-row mx-2 md:mx-1 hover:text-yellow-400"
            >
              <div className="text-3xl md:text-4xl">
                <IoLogoYoutube />
              </div>
              <p className="text-xs md:text-md my-auto mx-3 hidden md:block">
                {" "}
                LifeWord Nation{" "}
              </p>
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-2 md:mt-5 w-4/5 text-center text-xs md:text-md my-auto">
        Life Word Nation - Built by{" "}
        <a
          href="https://www.webcontract.io"
          target="__blank"
          className="hover:text-yellow-400 font-semibold"
        >
          WebContract.io
        </a>{" "}
      </p>
    </footer>
  );
};

export default Footer;

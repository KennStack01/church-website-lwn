import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo-text-lwn.png";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between text-xs md:text-lg text-white bg-blue-back-500 w-full py-5">
      <div>
        <img
          src={logo}
          alt="Logo Life Word Nation"
          width={250}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-row justify-between my-auto">
        <div className="flex flex-col mx-3 md:mx-5">
          <Link to="/">Welcome</Link>
          <Link to="/community">Community</Link>
        </div>
        <div className="flex flex-col mx-3 md:mx-5">
          <Link to="/bibleSchool">Bible School</Link>
          <Link to="/community">Resources</Link>
        </div>
        <div className="flex flex-col mx-3 md:mx-5">
          <Link to="/giveNow">Donate</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;

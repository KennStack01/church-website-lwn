import React from "react";

// import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

const CommunityCombo = () => {
  return (
    <>
      <Link
        activeClass="active"
        to="whatIsLWN"
        spy={true}
        smooth={true}
        offset={-60}
        duration={1000}
        delay={300}
        className="m-4 hover:underline"
      >
        What is LWN
      </Link>
      <Link
        activeClass="active"
        to="vision"
        spy={true}
        smooth={true}
        offset={-60}
        duration={1000}
        delay={300}
        className="m-4 hover:underline"
      >
        Our Vision
      </Link>
      <Link
        activeClass="active"
        to="statement"
        spy={true}
        smooth={true}
        offset={-60}
        duration={1000}
        delay={300}
        className="m-4 hover:underline"
      >
        Statement of Faith
      </Link>
      <Link
        activeClass="active"
        to="aboutPastor"
        spy={true}
        smooth={true}
        offset={-60}
        duration={1000}
        delay={300}
        className="m-4 hover:underline"
      >
        About the Pastor
      </Link>
    </>
  );
};

export default CommunityCombo;

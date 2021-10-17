import React from "react";
import { Link } from "gatsby";
import AboutPastor from "../components/Community/AboutPastor";
import StatementOfFaith from "../components/Community/StatementOfFaith";
import VisionOfTheChurch from "../components/Community/VisionOfTheChurch";
import WhatIsLifeWord from "../components/Community/WhatIsLifeWord";
import WhoAreWe from "../components/Community/WhoAreWe";
import { BsBoxArrowInRight } from "react-icons/bs";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Community() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Community"
      />
      <WhatIsLifeWord />
      <AboutPastor />
      <VisionOfTheChurch />
      <StatementOfFaith />
      <WhoAreWe />
      <div className="flex flex-row justify-center">
        <Link
          to="/contact"
          className="flex flex-row font-bold text-lg md:text-xl my-5 md:my-8 bg-blue-back-500 px-2 py-1 text-white hover:text-yellow-400"
        >
          <p className="mx-2">Join us Now </p>
          <BsBoxArrowInRight className="my-auto text-3xl mx-2" />
        </Link>
      </div>
    </Layout>
  );
}

export default Community;

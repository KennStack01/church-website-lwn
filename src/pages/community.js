import React from "react";
import { Link } from "gatsby";
import AboutPastor from "../components/Community/AboutPastor";
import StatementOfFaith from "../components/Community/StatementOfFaith";
import VisionOfTheChurch from "../components/Community/VisionOfTheChurch";
import WhatIsLifeWord from "../components/Community/WhatIsLifeWord";
import WhoAreWe from "../components/Community/WhoAreWe";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Community() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <WhatIsLifeWord />
      <AboutPastor />
      <VisionOfTheChurch />
      <StatementOfFaith />
      <WhoAreWe />
      <div className="flex flex-row justify-center">
        <Link
          to="/contact"
          className="font-bold text-xl md:text-2xl my-5 md:my-8 bg-blue-back-500 px-2 py-1 text-white hover:text-yellow-400"
        >
          Join us Now!
        </Link>
      </div>
    </Layout>
  );
}

export default Community;

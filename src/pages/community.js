import React from "react";
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
    </Layout>
  );
}

export default Community;

import React from "react";

import Layout from "../components/layout";
import MobilePay from "../components/PaymentsLink/MobilePay";
import SEO from "../components/seo";

function GiveNow() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div>
        <MobilePay />
      </div>
    </Layout>
  );
}

export default GiveNow;

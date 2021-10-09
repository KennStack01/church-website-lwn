import React from "react";
import Announcement from "../components/Home/Announcement";
import HeroSection from "../components/Home/HeroSection";
import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="top-0 -mt-5 md:mt-0">
        <HeroSection />
      </div>
      <Announcement />
    </Layout>
  );
}

export default IndexPage;

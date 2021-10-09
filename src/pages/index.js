import React from "react";
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
      <HeroSection />
    </Layout>
  );
}

export default IndexPage;

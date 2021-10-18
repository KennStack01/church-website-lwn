import React from "react";
import { Link } from "gatsby";
import { BsBoxArrowInRight } from "react-icons/bs";

import Layout from "../components/layout";
import SEO from "../components/seo";
import LeadersList from "../components/Community/Leadership/LeadersList";

function Leadership() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Leadership"
      />

      <h1 className="text-center text-xl font-semibold mt-10 md:mt-8">
        Church Overseers
      </h1>
      <div>
        <LeadersList />
      </div>
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

export default Leadership;

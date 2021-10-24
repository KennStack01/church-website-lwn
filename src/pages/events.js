import React from "react";
import EventsList from "../components/Events/EventsList";

import Layout from "../components/layout";
import SEO from "../components/seo";

function Events() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Events"
      />
      <h1 className="text-center text-xl font-bold mb-6 mt-10">
        Events Calendar
      </h1>
      <EventsList />
    </Layout>
  );
}

export default Events;

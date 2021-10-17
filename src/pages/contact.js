import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Contact/Form";
import SocialMedia from "../components/Contact/SocialMedia";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:mx-4">
          <Form />
        </div>
        <div className="md:mx-4">
          <SocialMedia />
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;

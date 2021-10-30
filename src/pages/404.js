import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import logo from "../images/logo-lwn.png";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="text-white  text-center">
        <img alt="Logo LWN" className="block mx-auto w-36 h-36" src={logo} />
        <h2 className="bg-gray-700 md:text-2xl text-xl text-center mx-auto font-bold inline-block my-8 p-3">
          Oops! Page not found!
        </h2>

        <Link
          to="/"
          className="bg-purple-600 hover:underline p-3 text-center mx-auto my-5 text-xl font-semibold "
        >
          Go to Home Page →
        </Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;

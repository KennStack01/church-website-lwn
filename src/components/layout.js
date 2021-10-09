import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <div className="top-0 sticky z-50 w-full">
        <Navbar />
      </div>

      {/* <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16"> */}
      <main className="flex-1 w-full mx-auto">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

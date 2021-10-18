import React from "react";
import { Link } from "gatsby";

const SubPageLinks = () => {
  return (
    <>
      <Link to="/church" className="m-4 hover:underline">
        LifeWord Nation
      </Link>
      <Link to="/leadership" className="m-4 hover:underline">
        Church Leadership
      </Link>
      <Link to="/extensions" className="m-4 hover:underline">
        Church Extensions
      </Link>
    </>
  );
};

export default SubPageLinks;

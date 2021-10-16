import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const StatementOfFaith = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsFaithStatement {
        description {
          html
        }
      }
    }
  `);

  return (
    <div className="flex flex-col my-6 md:my-10 mx-2 md:mx-5">
      <h1 className="mx-auto font-bold text-xl md:text-2xl my-3 bg-blue-back-500 px-2 py-1 text-white">
        Statement of Faith
      </h1>

      <p
        className="mx-2 md:mx-10 my-4 text-justify"
        dangerouslySetInnerHTML={{
          __html: data.graphCmsFaithStatement.description.html,
        }}
      >
        {/* {data.graphCmsFaithStatement.description.markdown} */}
      </p>
    </div>
  );
};

export default StatementOfFaith;

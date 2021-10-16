import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Img from "gatsby-image";

const AboutPastor = () => {
  const data = useStaticQuery(graphql`
    query {
      graphCmsAboutThePastor {
        description {
          html
        }
        picture {
          url
        }
      }
    }
  `);

  return (
    <div className="flex flex-col my-6 md:my-10 mx-2 md:mx-5">
      <h1 className="mx-auto font-bold text-xl md:text-2xl my-3 bg-blue-back-500 px-2 py-1 text-white">
        About Rev Visu
      </h1>

      <div className="flex flex-col md:flex-row my-3 md:my-6">
        <div className="md:w-2/4 md:mx-6">
          <img
            src={data.graphCmsAboutThePastor.picture.url}
            alt="Who we are"
            className="rounded-3xl"
          />
        </div>
        <p
          className="mx-2 md:mx-10 my-4 md:my-auto text-justify md:w-2/4"
          dangerouslySetInnerHTML={{
            __html: data.graphCmsAboutThePastor.description.html,
          }}
        >
          {/* {data.graphCmsFaithStatement.description.markdown} */}
        </p>
      </div>
    </div>
  );
};

export default AboutPastor;

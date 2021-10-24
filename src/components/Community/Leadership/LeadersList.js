import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Leader from "./Leader";
import Overseer from "./Overseer";

const LeadersList = () => {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsGeneralOverseer {
        edges {
          node {
            profilePicture {
              url
            }
            fullName
            role
            id
          }
        }
      }
      allGraphCmsChurchExtension {
        edges {
          node {
            profilePicture {
              url
            }
            pastorsName
            lwnExtensionName
            churchAddress
            phoneNumber1
            phoneNumber2
            id
          }
        }
      }
    }
  `);

  return (
    <div>
      <h1 className="text-center text-xl font-semibold mt-10 md:mt-8">
        Leadership
      </h1>
      <div className="flex flex-col md:grid grid-cols-3">
        {data.allGraphCmsGeneralOverseer.edges.map((overseer) => (
          <Leader
            key={overseer.node.id}
            profilePictureURL={overseer.node.profilePicture.url}
            name={overseer.node.fullName}
            role={overseer.node.role}
          />
        ))}
      </div>
      <h1 className="text-center text-xl font-semibold mt-10 md:mt-8">
        Extensions Overseers
      </h1>
      <div className="flex flex-col md:grid grid-cols-4">
        {data.allGraphCmsChurchExtension.edges.map((overseer) => (
          <Overseer
            key={overseer.node.id}
            profilePictureURL={overseer.node.profilePicture.url}
            pastorName={overseer.node.pastorsName}
            churchName={overseer.node.lwnExtensionName}
            phoneNumber1={overseer.node.phoneNumber1}
            phoneNumber2={overseer.node.phoneNumber2}
            churchAddress={overseer.node.churchAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default LeadersList;

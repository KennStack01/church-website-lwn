import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Leader from "./Leader";

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
    }
  `);

  return (
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
  );
};

export default LeadersList;

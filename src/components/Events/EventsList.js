import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Event from "./Event";

export default function EventsList() {
  const data = useStaticQuery(graphql`
    query {
      allGraphCmsEvent(sort: { order: DESC, fields: startingDateAndTime }) {
        edges {
          node {
            startingDateAndTime
            lastDayOfTheProgram
            eventCoverImage {
              url
            }
            title
            description
            eventLink
            id
          }
        }
      }
    }
  `);

  return (
    <div className="flex flex-col mx-auto">
      {data.allGraphCmsEvent.edges.map((event) => (
        <Event
          key={event.node.id}
          startingDate={event.node.startingDateAndTime}
          endDate={event.node.lastDayOfTheProgram}
          imageURL={event.node.eventCoverImage.url}
          title={event.node.title}
          description={event.node.description}
          eventLink={event.node.eventLink}
        />
      ))}
    </div>
  );
}

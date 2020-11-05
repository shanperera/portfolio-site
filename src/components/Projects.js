import React from "react";
import { BodyItem } from "./BodyItem";
import { TimelineEntry } from "./TimelineEntry";

class About extends React.Component {
  render() {
    return (
      <BodyItem
        background="brand"
        title="Personal Projects"
        anchorHref="#Projects"
        anchorName="Projects"
      >
        HELLUR
      </BodyItem>
    );
  }
}

export default About;

import React from "react";
import { Anchor, Box, Text } from "grommet";
import { BodyItem } from "./BodyItem";

class Projects extends React.Component {
  render() {
    return (
      <BodyItem
        title="Personal Projects"
        titleTextColor="titleText"
        anchorHref="#About"
        anchorName="About"
      >
        TEST TEXT
      </BodyItem>
    );
  }
}

export default Projects;

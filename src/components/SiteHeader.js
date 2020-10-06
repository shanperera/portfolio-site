import React from "react";
import { Box } from "grommet";
import Header from "./Header";
import SiteAnchor from "./SiteAnchor";

class SiteHeader extends React.Component {
  render() {
    return (
      <Header>
        <SiteAnchor label="HELLO WORLD!" color="white" />
        <Box direction="row-responsive" gap="small">
        <SiteAnchor label="HOME" color="white" />
        <SiteAnchor label="WORK" color="white" />
        <SiteAnchor label="SKILLS" color="white" />
        <SiteAnchor label="ABOUT" color="white" />
        </Box>
      </Header>
    );
  }
}

export default SiteHeader;

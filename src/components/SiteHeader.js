import React from "react";
import { Box } from "grommet";
import Header from "./Header";
import SiteAnchor from "./SiteAnchor";

class SiteHeader extends React.Component {
  render() {
    return (
      <Header pad={{top: "large", bottom: "xsmall", horizontal: "xlarge"}} border={{color: "light-3", size: "xsmall", side: "bottom"}} background="light-1">
        <SiteAnchor label="SP"/>
        <Box direction="row-responsive" gap="medium">
        <SiteAnchor label="Home"/>
        <SiteAnchor label="Work"/>
        <SiteAnchor label="Skills"/>
        <SiteAnchor label="About"/>
        </Box>
      </Header>
    );
  }
}

export default SiteHeader;

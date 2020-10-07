import React from "react";
import { Anchor, Box } from "grommet";
import Header from "./Header";
import SiteAnchor from "./SiteAnchor";

class SiteHeader extends React.Component {
  render() {
    return (
      <Header pad={{top: "large", bottom: "xsmall", horizontal: "xlarge"}} border={{color: "light-3", size: "xsmall", side: "bottom"}} background="light-1">
        <Anchor size="xxlarge" label="SP"/>
        <Box direction="row-responsive" gap="medium">
        <Anchor label="Home"/>
        <Anchor label="Work"/>
        <Anchor label="Skills"/>
        <Anchor label="About"/>
        </Box>
      </Header>
    );
  }
}

export default SiteHeader;

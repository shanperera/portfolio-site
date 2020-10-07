import React from "react";
import { Anchor, Box } from "grommet";
import Header from "./Header";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  font-family: Sansita Swashed;
`;

class SiteHeader extends React.Component {
  render() {
    return (
      <Header
        pad={{ top: "large", bottom: "xsmall", horizontal: "xlarge" }}
        border={{ color: "light-3", size: "xsmall", side: "bottom" }}
      >
        <StyledAnchor href="/" size="xxlarge" label="SP" />
        <Box direction="row-responsive" gap="medium">
          <Anchor href="#" label="Home" />
          <Anchor href="#" label="Work" />
          <Anchor href="#" label="Skills" />
          <Anchor href="#" label="About" />
        </Box>
      </Header>
    );
  }
}

export default SiteHeader;

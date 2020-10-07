import React from "react";
import { Anchor, Box } from "grommet";
import Header from "./Header";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  font-family: Sansita Swashed;
`;

const StyledHeader = styled(Header)`
  position: fixed;
`;

class SiteHeader extends React.Component {
  render() {
    return (
      <StyledHeader
        pad={{ top: "large", bottom: "xsmall", horizontal: "xlarge" }}
        border={{ color: "light-3", size: "xsmall", side: "bottom" }}
      >
        <Box animation={{ type: "fadeIn", delay: "1000", duration: "2000" }}>
          <StyledAnchor href="/" size="xxlarge" label="SP" />
        </Box>
        <Box
          direction="row-responsive"
          gap="medium"
        >
          <Anchor href="#" label="Home" />
          <Anchor href="#Work" label="Work" />
          <Anchor href="#Skills" label="Skills" />
          <Anchor href="#About" label="About" />
        </Box>
      </StyledHeader>
    );
  }
}

export default SiteHeader;

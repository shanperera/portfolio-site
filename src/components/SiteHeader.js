import React from "react";
import { Anchor, Box } from "grommet";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  font-family: Sansita Swashed;
`;

class SiteHeader extends React.Component {
  render() {
    return (
      <Box
        direction="row-responsive"
        align="center"
        justify="between"
        flex="false"
        pad={{ top: "large", bottom: "xsmall", horizontal: "xlarge" }}
        border={{ color: "light-3", size: "xsmall", side: "bottom" }}
      >
        <Box animation={{ type: "fadeIn", delay: "1000", duration: "2000" }}>
          <StyledAnchor href="/" size="xlarge" label="SP" />
        </Box>
        <Box direction="row-responsive" gap="medium">
          <Anchor className="jello-horizontal" href="#Home" label="Home" />
          <Anchor className="jello-horizontal" href="#Skills" label="Skills" />
          <Anchor className="jello-horizontal" href="#Work" label="Work" />
          <Anchor className="jello-horizontal" href="#Projects" label="Projects" />
          <Anchor className="jello-horizontal" href="#Contact" label="Contact" />
        </Box>
      </Box>
    );
  }
}

export default SiteHeader;

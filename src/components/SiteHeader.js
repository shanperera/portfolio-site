import React from "react";
import { Anchor, Box, Text, Menu, ResponsiveContext } from "grommet";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  font-family: Sansita Swashed;
`;

const StyledMenu = styled(Menu)`
  label:hover {
    background: red;
  }
`;

class SiteHeader extends React.Component {
  render() {
    return (
      <Box
        direction="row"
        align="center"
        justify="between"
        flex="false"
        pad={{ top: "large", bottom: "xsmall", horizontal: "xlarge" }}
        border={{ color: "light-3", size: "xsmall", side: "bottom" }}
      >
        <Box animation={{ type: "fadeIn", delay: "250", duration: "2000" }}>
          <StyledAnchor href="/" size="xlarge" label="SP" />
        </Box>
        <GetHeader />
      </Box>
    );
  }
}

function GetHeader() {
  const size = React.useContext(ResponsiveContext);
  if (size === "small") {
    return <MobileHeader />;
  }
  return <FullSizeHeader />;
}

function FullSizeHeader() {
  return (
    <Box direction="row" gap="medium">
      <Anchor className="jello-horizontal" href="#Home" label="Home" />
      <Anchor className="jello-horizontal" href="#Skills" label="Skills" />
      <Anchor className="jello-horizontal" href="#Work" label="Work" />
      <Anchor className="jello-horizontal" href="#Projects" label="Projects" />
      <Anchor className="jello-horizontal" href="#Contact" label="Contact" />
    </Box>
  );
}

function MobileHeader() {
  return (
    <StyledMenu
      label={<Text color="brand">Navigation</Text>}
      items={[
        {
          label: (
            <Box fill="horizontal" align="center">
              <Anchor className="jello-horizontal" href="#Home" label="Home" />
            </Box>
          ),
          href: "#Home",
        },
        {
          label: (
            <Box fill="horizontal" align="center">
              <Anchor
                className="jello-horizontal"
                href="#Skills"
                label="Skills"
              />
            </Box>
          ),
          href: "#Skills",
        },
        {
          label: (
            <Box fill="horizontal" align="center">
              <Anchor className="jello-horizontal" href="#Work" label="Work" />
            </Box>
          ),
          href: "#Work",
        },
        {
          label: (
            <Box fill="horizontal" align="center">
              <Anchor
                className="jello-horizontal"
                href="#Projects"
                label="Projects"
              />
            </Box>
          ),
          href: "#Projects",
        },
        {
          label: (
            <Box fill="horizontal" align="center">
              <Anchor
                className="jello-horizontal"
                href="#Contact"
                label="Contact"
              />
            </Box>
          ),
          href: "#Contact",
        },
      ]}
    ></StyledMenu>
  );
}

export default SiteHeader;

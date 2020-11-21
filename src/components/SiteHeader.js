import React from "react";
import { Anchor, Box, Menu, Text, ResponsiveContext } from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
import styled from "styled-components";

const StyledAnchor = styled(Anchor)`
  font-family: Sansita Swashed;
`;

const NavHome = (
  <Box fill="horizontal" align="center">
    <Text color="brand" weight="bold" size="medium">
      Home
    </Text>
  </Box>
);

const NavSkills = (
  <Box fill="horizontal" align="center">
    <Text color="brand" weight="bold" size="medium">
      Skills
    </Text>
  </Box>
);

const NavWork = (
  <Box fill="horizontal" align="center">
    <Text color="brand" weight="bold" size="medium">
      Work
    </Text>
  </Box>
);

const NavProjects = (
  <Box fill="horizontal" align="center">
    <Text color="brand" weight="bold" size="medium">
      Projects
    </Text>
  </Box>
);

const NavContact = (
  <Box fill="horizontal" align="center">
    <Text color="brand" weight="bold" size="medium">
      Contact
    </Text>
  </Box>
);
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
    <Menu
      icon={<MenuIcon color="brand" size="medium" />}
      items={[
        { label: NavHome, href: "#Home" },
        { label: NavSkills, href: "#Skills" },
        { label: NavWork, href: "#Work" },
        { label: NavProjects, href: "#Projects" },
        { label: NavContact, href: "#Contact" },
      ]}
    ></Menu>
  );
}

export default SiteHeader;

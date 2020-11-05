import React from "react";
import { Anchor, Box, Card, Text } from "grommet";
import { CaretNext } from "grommet-icons";
import styled from "styled-components";

const TitleText = styled(Text)`
  font-family: Bebas Neue;
`;

const PositionText = styled(Text)`
  text-transform: uppercase;
`;

class Work extends React.Component {
  render() {
    return (
      <Box flex="false">
        <Anchor href="#Work" name="Work"></Anchor>
        <Box
          align="center"
          justify="center"
          margin={{ horizontal: "xlarge", vertical: "xsmall" }}
          pad={{ horizontal: "xlarge", vertical: "small" }}
        >
          <Box
            align="center"
            justify="center"
            pad={{ top: "large", horizontal: "xlarge", bottom: "medium" }}
          >
            <Text weight="bold" color="titleText" size="xlarge">
              Work Experience
            </Text>
          </Box>
        </Box>
        <Box
          margin={{ horizontal: "xlarge", vertical: "xsmall" }}
          pad={{ horizontal: "xlarge", vertical: "small" }}
        >
          <ExperienceEntry
            date="Nov 2011 - June 2016"
            title="Nice Workplace"
            position="Full Stack Developer"
            technologies={["ReactJS", "Java", "Ruby on Rails"]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ExperienceEntry>
          <ExperienceEntry
            date="Nov 2011 - June 2016"
            title="Cool Workplace"
            position="Junior Developer"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ExperienceEntry>
        </Box>
      </Box>
    );
  }
}

function TechnologyEntry(props) {
  const stack = props.technologies;
  let techStack;

  if (stack != null) {
    techStack = stack.map((i) => <TechnologyCard>{i}</TechnologyCard>);
    return (
      <Box margin={{ top: "small", bottom: "small"}}>
        <PositionText fill="horizontal" size="small">
          Stack:
        </PositionText>
        <Box margin={{ top: "xsmall" }} direction="row-responsive" gap="xsmall">
          {techStack}
        </Box>
      </Box>
    );
  }

  return null;
}

function TechnologyCard(props) {
  return (
    <Card background="brand" pad="small" elevation="xsmall">
      {props.children}
    </Card>
  );
}

function ExperienceEntry(props) {
  return (
    <Box direction="row-responsive">
      <Box
        direction="row-responsive"
        gap="small"
        align="center"
        justify="center"
        pad="small"
        border={{ size: "xsmall", side: "right" }}
        width="medium"
      >
        <Text weight="bold">{props.date}</Text>
        <CaretNext size="small" color="brand" />
      </Box>
      <Box
        margin={{ top: "small", left: "medium"}}
        border={{ side: "bottom", size: "xsmall" }}
        pad="small"
        fill
      >
        <TitleText color="titleText" size="large">
          {props.title}
        </TitleText>
        <PositionText
          color="accentText"
          margin={{ bottom: "small" }}
          size="medium"
        >
          {props.position}
        </PositionText>
        {props.children}
        <TechnologyEntry technologies={props.technologies} />
      </Box>
    </Box>
  );
}

export default Work;

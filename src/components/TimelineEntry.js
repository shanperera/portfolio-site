import React from "react";
import { Box, Card, Text } from "grommet";
import { CaretNext } from "grommet-icons";
import styled from "styled-components";

const TitleText = styled(Text)`
  font-family: Bebas Neue;
`;

const PositionText = styled(Text)`
  text-transform: uppercase;
`;

export function TimelineEntry(props) {
  return (
    <Box direction="row-responsive">
      <Box
        direction="row-responsive"
        gap="small"
        align="center"
        justify="center"
        pad="small"
        border={{ size: "xsmall", side: "right", color: "light-6" }}
        width="medium"
      >
        <Text weight="bold" color="accentText">
          {props.date}
        </Text>
        <CaretNext size="small" color="brand" />
      </Box>
      <Box
        margin={{ top: "small", left: "medium" }}
        border={{ side: "bottom", size: "xsmall", color: "light-6" }}
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

function TechnologyEntry(props) {
  const stack = props.technologies;
  let techStack;

  if (stack != null) {
    techStack = stack.map((i) => <TechnologyCard>{i}</TechnologyCard>);
    return (
      <Box margin={{ top: "small", bottom: "small" }}>
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
    <Card background="brand" pad="xsmall" elevation="xsmall">
      {props.children}
    </Card>
  );
}

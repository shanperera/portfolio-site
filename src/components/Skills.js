import React from "react";
import { Box, Card as GrommetCard } from "grommet";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background: #7d4cdb;
`;

class Skills extends React.Component {
  render() {
    return (
      <Box flex="false">
        <StyledBox justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={true}>
            <Card isTopRounded={true}>HELLUR</Card>
            <Card isTopRounded={true}>HELLUR</Card>
            <Card isTopRounded={true}>HELLUR</Card>
          </CardBox>
        </StyledBox>
        <Box justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={false}>
            <Card isTopRounded={false}>HELLUR</Card>
            <Card isTopRounded={false}>HELLUR</Card>
            <Card isTopRounded={false}>HELLUR</Card>
          </CardBox>
        </Box>
      </Box>
    );
  }
}

function Card(props) {
  const isTopRounded = props.isTopRounded;
  
  if (isTopRounded) {
    return (
      <GrommetCard
        elevation="none"
        pad="small"
        background="light-2"
        width="medium"
        height="xsmall"
        round={{ size: "small", corner: "top" }}
      >
        {props.children}
      </GrommetCard>
    );
  }

  return (
    <GrommetCard
      elevation="none"
      pad="small"
      background="light-2"
      width="medium"
      height="xsmall"
      round={{ size: "small", corner: "bottom" }}
    >
      {props.children}
    </GrommetCard>
  );
}

function CardBox(props) {
  const isHeader = props.isHeader;

  if (isHeader) {
    return (
      <Box
        direction="row-responsive"
        justify="between"
        gap="large"
        pad={{ top: "large", horizontal: "large" }}
      >
        {props.children}
      </Box>
    );
  }

  return (
    <Box
      direction="row-responsive"
      justify="between"
      gap="large"
      pad={{ bottom: "large", horizontal: "large" }}
    >
      {props.children}
    </Box>
  );
}

export default Skills;

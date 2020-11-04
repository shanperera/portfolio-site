import React from "react";
import { Anchor, Box, Card as GrommetCard, Text } from "grommet";
import { Code, Reactjs, Java } from "grommet-icons";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background: #7d4cdb;
`;

class Skills extends React.Component {
  render() {
    return (
      <Box flex="false">
        <Anchor href="#Skills" name="Skills"></Anchor>
        <StyledBox justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={true}>
            <Card isTopRounded={true}>
              <Java color="brand" size="large"></Java>
              <Text color="dark-2" size="large">
                Java
              </Text>
            </Card>
            <Card isTopRounded={true}>
              <Reactjs color="brand" size="large"></Reactjs>
              <Text color="dark-2" size="large">
                React
              </Text>
            </Card>
            <Card isTopRounded={true}>
              <Code color="brand" size="large"></Code>
              <Text color="dark-2" size="large">
                Projects
              </Text>
            </Card>
          </CardBox>
        </StyledBox>
        <Box justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={false}>
            <Card isTopRounded={false}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </Card>
            <Card isTopRounded={false}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </Card>
            <Card isTopRounded={false}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </Card>
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
        align="center"
        justify="center"
        gap="small"
        elevation="none"
        pad="medium"
        background="light-2"
        width="medium"
        round={{ size: "small", corner: "top" }}
      >
        {props.children}
      </GrommetCard>
    );
  }

  return (
    <GrommetCard
      align="center"
      justify="center"
      gap="small"
      elevation="none"
      pad="small"
      background="light-2"
      width="medium"
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

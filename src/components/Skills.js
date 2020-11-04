import React from "react";
import { Box, Card as GrommetCard, Text } from "grommet";
import { Code, Deploy, Reactjs, Next } from "grommet-icons";

class Skills extends React.Component {
  render() {
    return (
      <Box flex="false">
        <Box background="brand" justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={true}>
            <Card isTopRounded={true}>
              <Code color="brand" size="large"/>
              <Text color="dark-2" weight="bold" size="large">
                Java
              </Text>
            </Card>
            <Card isTopRounded={true}>
              <Reactjs color="brand" size="large"/>
              <Text color="dark-2" weight="bold" size="large">
                React
              </Text>
            </Card>
            <Card isTopRounded={true}>
              <Deploy color="brand" size="large"/>
              <Text color="dark-2" weight="bold" size="large">
                Projects
              </Text>
            </Card>
          </CardBox>
        </Box>
        <Box justify="center" align="center" direction="row-responsive">
          <CardBox isHeader={false}>
            <Card isTopRounded={false}>
            <List>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
                <ListItem>Vestibulum auctor dapibus neque.</ListItem>
                <ListItem>Nunc dignissim risus id metus.</ListItem>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
              </List>
            </Card>
            <Card isTopRounded={false}>
              <List>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
                <ListItem>Vestibulum auctor dapibus neque.</ListItem>
                <ListItem>Nunc dignissim risus id metus.</ListItem>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
              </List>
            </Card>
            <Card isTopRounded={false}>
            <List>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
                <ListItem>Vestibulum auctor dapibus neque.</ListItem>
                <ListItem>Nunc dignissim risus id metus.</ListItem>
                <ListItem>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </ListItem>
                <ListItem>Aliquam tincidunt mauris eu risus.</ListItem>
              </List>
            </Card>
          </CardBox>
        </Box>
      </Box>
    );
  }
}

function List(props) {
  return (
    <Box pad="small" direction="column" gap="xsmall">
      {props.children}
    </Box>
  );
}

function ListItem(props) {
  return (
    <Box direction="row-responsive" align="center" overflow="auto">
      <Text size="medium" pad="small">
        <Box direction="row-responsive">
          <Box pad="xsmall">
            <Next color="brand" size="small" />
          </Box>
          {props.children}
        </Box>
      </Text>
    </Box>
  );
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
    <Box border="small" border={{ color: "light-4",size: "xsmall", side: "bottom"}} round={{ size: "small", corner: "bottom" }}>
    <GrommetCard
      align="center"
      justify="center"
      gap="small"
      elevation="none"
      pad="small"
      background="light-2"
      width="medium"
      round={{ size: "small", corner: "bottom" }}
      border={{ color: "light-4",size: "xsmall", side: "vertical"}}
    >
      {props.children}
    </GrommetCard>
    </Box>
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

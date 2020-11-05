import React from "react";
import { Box, Text } from "grommet";
import { Code, Deploy, Reactjs } from "grommet-icons";
import { ListContainer, ListItem } from "./Lists"
import { Card, CardContainer, CardHeader } from "./Card";

class Skills extends React.Component {
  render() {
    return (
      <Box flex="false">
        <Box
          background="brand"
          justify="center"
          align="center"
          direction="row-responsive"
        >
          <CardContainer>
            <CardHeader>
              <Code color="brand" size="large" />
              <Text color="dark-2" weight="bold" size="large">
                Java
              </Text>
            </CardHeader>
            <CardHeader>
              <Reactjs color="brand" size="large" />
              <Text color="dark-2" weight="bold" size="large">
                React
              </Text>
            </CardHeader>
            <CardHeader>
              <Deploy color="brand" size="large" />
              <Text color="dark-2" weight="bold" size="large">
                Projects
              </Text>
            </CardHeader>
          </CardContainer>
        </Box>
        <Box justify="center" align="center" direction="row-responsive">
          <CardContainer>
            <Card>
              <ListContainer>
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
              </ListContainer>
            </Card>
            <Card>
              <ListContainer>
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
              </ListContainer>
            </Card>
            <Card>
              <ListContainer>
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
              </ListContainer>
            </Card>
          </CardContainer>
        </Box>
      </Box>
    );
  }
}

export default Skills;

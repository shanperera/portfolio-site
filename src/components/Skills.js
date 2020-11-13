import React from "react";
import { Anchor, Box, Text } from "grommet";
import { Code, Deploy, Reactjs } from "grommet-icons";
import { ListContainer, ListItem } from "./Lists";
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
              <Box className="shake-bottom">
                <Code color="brand" size="large" />
                <Text color="dark-2" weight="bold" size="large">
                  Java
                </Text>
              </Box>
            </CardHeader>
            <CardHeader>
              <Box className="shake-bottom">
                <Reactjs color="brand" size="large" />
                <Text color="dark-2" weight="bold" size="large">
                  React
                </Text>
              </Box>
            </CardHeader>
            <CardHeader>
              <Box align="center" className="shake-bottom">
                <Deploy color="brand" size="large" />
                <Text color="dark-2" weight="bold" size="large">
                  Projects
                </Text>
              </Box>
            </CardHeader>
          </CardContainer>
        </Box>
        <Box justify="center" align="center" direction="row-responsive">
          <CardContainer>
            <Card>
              <ListContainer>
                <ListItem imageColor="brand">
                  6 Java programs released to the public
                </ListItem>
                <ListItem imageColor="brand">6000+ registered users</ListItem>
                <ListItem imageColor="brand">1500+ daily active users</ListItem>
                <ListItem imageColor="brand">
                  15,000+ lines of code submitted for peer review
                </ListItem>
                <ListItem imageColor="brand">
                  150,000+ lines of code developed for personal use
                </ListItem>
                <ListItem imageColor="brand">
                  <Anchor
                    margin={{ right: "xsmall" }}
                    href="#RSPeer"
                    label="More information"
                  />
                  available in Projects.
                </ListItem>
              </ListContainer>
            </Card>
            <Card>
              <ListContainer>
                <ListItem imageColor="brand">
                  Created this website as my first React project
                </ListItem>
                <ListItem imageColor="brand">
                  Makes use of new React Hooks API
                </ListItem>
                <ListItem imageColor="brand">
                  Uses CSS component library Grommet
                </ListItem>
                <ListItem imageColor="brand">
                  Reusable components created with DRY principles
                </ListItem>
                <ListItem imageColor="brand">
                  Employs OOP best practices
                </ListItem>
                <ListItem imageColor="brand">
                  Design and UX created by me
                </ListItem>
              </ListContainer>
            </Card>
            <Card>
              <ListContainer>
                <ListItem imageColor="brand">
                  Android application for dine-in restaurant ordering
                </ListItem>
                <ListItem imageColor="brand">
                  Automation scripts for MMORPG Oldschool Runescape
                </ListItem>
                <ListItem imageColor="brand">
                  Website created using React
                </ListItem>
                <ListItem imageColor="brand">
                  Self taught Java, React and NodeJS
                </ListItem>
                <ListItem imageColor="brand">
                  Venturing into Raspberry Pi projects
                </ListItem>
                <ListItem imageColor="brand">
                  Exploring about hardware engineering
                </ListItem>
              </ListContainer>
            </Card>
          </CardContainer> 
        </Box>
      </Box>
    );
  }
}

export default Skills;

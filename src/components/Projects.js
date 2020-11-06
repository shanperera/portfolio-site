import React from "react";
import { Box, Image, Text } from "grommet";
import { BodyItem } from "./BodyItem";
import { TechnologyEntry, TimelineEntry } from "./TimelineEntry";
import SW from "../res/sw-image.jpg";
import Avatar from "../res/FlatCharacterAvatarWeb.svg";
import RSPeer from "../res/rspeer-img.png";
import { ListItem } from "./Lists";

class About extends React.Component {
  render() {
    return (
      <BodyItem
        background="brand"
        title="Personal Projects"
        anchorHref="#Projects"
        anchorName="Projects"
      >
        <TimelineEntry
          date="August 2020 - Current"
          title="Portfolio Website"
          position="ReactJS Developer Portfolio"
          technologies={["React", "Node", "Grommet", "Github Pages"]}
          stackColor="white"
        >
          <Box direction="row-responsive">
            <Box gap="small">
              <Text>
                A website created by myself to act as a portfolio for my work
                and personal projects. As well as demonstrate my web application
                and design skills. This website was also used as a method of
                learning and further improving my skills in React and Node, as
                it is my first ever project using these frameworks.
              </Text>
              <ListItem>
                Self-taught React, Node and Grommet by reading official
                documentation and through practical application during the
                creation of this website
              </ListItem>
              <ListItem>
                All code follows the DRY principle as well as the best practices
                of object oriented programming
              </ListItem>
              <ListItem>
                Site design, layout, color scheme, and choice of typography
                chosen and created solely by myself with care.
              </ListItem>
            </Box>
            <Box fill="horizontal" margin="small" width="small" height="small">
              <Image fit="contain" src={Avatar} />
            </Box>
          </Box>
        </TimelineEntry>
        <TimelineEntry
          date="September 2018 - June 2020"
          title="RSPeer Scripting"
          position="Java Automation API"
          technologies={["Java", "Docker", "Networking", "Concurrency"]}
          stackColor="white"
        >
          <Box direction="row-responsive">
            <Box gap="small">
              <Text>
                Created Java scripts for automating complex tasks in the online
                game Oldschool Runescape using the RSPeer client and its Java
                API. The scripts were designed to complete in-game actions and
                perform more efficiently than a human player while evading the
                game’s machine learning powered bot detection system.
              </Text>
              <ListItem>
                Automated entity interactions and reactions to in-game events
              </ListItem>
              <ListItem>
                Designed control logic based on in-game conditions and user
                preferences
              </ListItem>
              <ListItem>
                Created tutorials & mentored new users and provide assistance
                with Java concepts to help them create their own scripts.
              </ListItem>
              <ListItem>
                3 free scripts and 3 premium scripts available to the public
                with over 6000 registered users and over 1500 daily active users
              </ListItem>
            </Box>
            <Box fill="horizontal" margin="small" width="medium" height="small">
              <Image fit="contain" src={RSPeer} />
            </Box>
          </Box>
        </TimelineEntry>
        <TimelineEntry
          date="2015"
          title="Smart Waiter"
          position="Android Application"
        >
          <Box direction="row-responsive">
            <Box gap="small">
              <Text margin={{ bottom: "medium" }}>
                An Android application designed and developed from scratch with
                a team of two other developers over the course of 8 months.
                Allows users to order, pay and tip wait staff at a dine-in
                restaurant using their Android phone.
              </Text>
              <ListItem>
                Download a restaurant’s menu to a user’s phone using QR codes
                and a Couchbase NoSQL database
              </ListItem>
              <ListItem>
                Implemented front-end and back-end services to allow orders to
                be placed and paid for through the applications
              </ListItem>
              <ListItem>
                Designed Couchbase NoSQL database to store restaurant info and
                metadata
              </ListItem>
              <Box margin={{ top: "medium" }}>
                <TechnologyEntry
                  technologies={[
                    "Java",
                    "Android SDK",
                    "CouchbaseDB",
                    "Stripe",
                    "ZXing",
                  ]}
                  stackColor="white"
                ></TechnologyEntry>
              </Box>
            </Box>
            <Box margin="small" fill="horizontal" width="small" height="medium">
              <Image fit="contain" src={SW} />
            </Box>
          </Box>
        </TimelineEntry>
      </BodyItem>
    );
  }
}

export default About;

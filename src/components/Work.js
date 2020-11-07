import React from "react";
import { Anchor, Box, Text } from "grommet";
import { TimelineEntry } from "./TimelineEntry";
import { ListItem } from "./Lists";
import { BodyItem } from "./BodyItem";

class Work extends React.Component {
  render() {
    return (
      <BodyItem
        title="Work Experience"
        titleTextColor="titleText"
        anchorHref="#Work"
        anchorName="Work"
      >
        <TimelineEntry
          date="Current"
          title="Open to new opportunities"
          position="Full Stack Developer"
          technologies={["Java", "React", "Node", "Practically Anything"]}
          dateTextColor="accentText"
          titleTextColor="titleText"
          positionTextColor="accentText"
          imageColor="brand"
          stackColor="brand"
        >
          <Box direction="row-responsive" gap="small">
            <Text>
              Are you looking for a new member to join your team? If you're in
              need of a hard working yet easy going full stack developer who can
              learn new technologies with speedy efficiency and is very quick on
              their feet:
              <Anchor href="#Contact" label=" Contact Me." />
            </Text>
          </Box>
        </TimelineEntry>
        <TimelineEntry
          date="June 2019 - April 2020"
          title="BMO Financial Group"
          position="Junior Developer"
          technologies={[
            "Elasticsearch",
            "Filebeat",
            "Java",
            "Python",
            "Ruby",
            "YAML",
          ]}
          dateTextColor="accentText"
          titleTextColor="titleText"
          positionTextColor="accentText"
          imageColor="brand"
          stackColor="brand"
        >
          <ListItem imageColor="brand">
            Collaborated within a small team to maintain ELK (Elastic) platform
            for entire BMO organization.
          </ListItem>
          <ListItem imageColor="brand">
            Connected with project teams to assess relevant platform use cases
            and onboard projects on to platform.
          </ListItem>
          <ListItem imageColor="brand">
            Ensured platform and data ingestion pipeline long term stability.
          </ListItem>
          <ListItem imageColor="brand">
            Provide support for unexpected platform issues and minimize business
            impact to customers and stakeholders.
          </ListItem>
          <ListItem imageColor="brand">
            Create scripts to automate tasks in onboarding process.
          </ListItem>
        </TimelineEntry>
        <TimelineEntry
          date="February 2019 - June 2020"
          title="FDM Group"
          position="Consultant"
          technologies={[
            "Java",
            "Docker",
            "Selenium",
            "JUnit",
            "Mockito",
            "UNIX",
            "SQL",
            "Code Security",
            "Design Patterns",
          ]}
          dateTextColor="accentText"
          titleTextColor="titleText"
          positionTextColor="accentText"
          imageColor="brand"
          stackColor="brand"
        >
          <ListItem imageColor="brand">
            Attended technical training courses in multiple fields involving
            computer science.
          </ListItem>
          <ListItem imageColor="brand">
            Completed all training courses with distinction for numerous
            platforms and skills
          </ListItem>
          <ListItem imageColor="brand">
            Mentored other trainees and offered assistance in learning new
            skills and improving overall training experience
          </ListItem>
        </TimelineEntry>
      </BodyItem>
    );
  }
}

export default Work;

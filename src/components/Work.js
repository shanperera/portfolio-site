import React from "react";
import { Anchor, Box, Card, Text } from "grommet";
import { CaretNext } from "grommet-icons";
import { ListItem } from "./Skills";
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
            date="Current"
            title="Open to new opportunities"
            position="Full Stack Developer"
            technologies={[ "Java", "React", "Node", "Practically Anything"]}
          >
            <Box direction="row-responsive" gap="small">
              <Text>
                Are you looking for a new member to join your team? If you're in
                need of a hard working yet easy going full stack developer who
                can learn new technologies with speedy efficiency and is very quick on their
                feet:
                <Anchor href="#" label=" Contact Me." />
              </Text>
            </Box>
          </ExperienceEntry>
          <ExperienceEntry
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
          >
            <ListItem>
              Collaborated within a small team to maintain ELK (Elastic)
              platform for entire BMO organization.
            </ListItem>
            <ListItem>
              Connected with project teams to assess relevant platform use cases
              and onboard projects on to platform.
            </ListItem>
            <ListItem>
              Ensured platform and data ingestion pipeline long term stability.
            </ListItem>
            <ListItem>
              Provide support for unexpected platform issues and minimize
              business impact to customers and stakeholders.
            </ListItem>
            <ListItem>
              Create scripts to automate tasks in onboarding process.
            </ListItem>
          </ExperienceEntry>
          <ExperienceEntry
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
          >
            <ListItem>
              Attended technical training courses in multiple fields involving
              computer science.
            </ListItem>
            <ListItem>
              Completed all training courses with distinction for numerous
              platforms and skills
            </ListItem>
            <ListItem>
              Mentored other trainees and offered assistance in learning
              new skills and improving overall training experience
            </ListItem>
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

function ExperienceEntry(props) {
  return (
    <Box direction="row-responsive">
      <Box
        direction="row-responsive"
        gap="small"
        align="center"
        justify="center"
        pad="small"
        border={{ size: "xsmall", side: "right", color: "light-6"}}
        width="medium"
      >
        <Text weight="bold" color="accentText">{props.date}</Text>
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

export default Work;

import React from "react";
import { Anchor, Box, Card, Text } from "grommet";
import { Github, Linkedin, Mail } from "grommet-icons";
import { SplitBackgroundCard } from "./Card";
import { useElementHover } from "../functions/ElementHover";

const ContactTitle = (
  <Box align="center" className="shake-bottom">
    <Text color="dark-2" size="xlarge">
      Contact
    </Text>
  </Box>
);

class Contact extends React.Component {
  render() {
    return (
      <Box flex="false">
        <SplitBackgroundCard
          title={ContactTitle}
          topPad={{ horizontal: "large" }}
          bottomPad={{ horizontal: "large" }}
          background="brand"
          bottomColor="titleText"
          topColor="brand"
          cardTopColor="light-2"
          cardBottomColor="light-2"
        >
          <Anchor href="#Contact" name="Contact" />
          <Box pad="small" align="center" gap="small">
            <Text>
              I am always open to new hiring opportunities and ideas for
              cooperation. Let's get in touch!
            </Text>
            <Box direction="row" gap="small">
              <Anchor href="https://www.linkedin.com/in/shan-perera-32ba2070/">
                <Box>
                  <Icon
                    className="pulsate-fwd"
                    element={Linkedin}
                    elementColor="brand"
                    hoverColor="hover"
                    size="medium"
                  />
                </Box>
              </Anchor>
              <Anchor href="mailto:shan.perera7@pm.me">
                <Box>
                  <Icon
                    className="pulsate-fwd"
                    element={Mail}
                    elementColor="brand"
                    hoverColor="hover"
                    size="medium"
                  />
                </Box>
              </Anchor>
              <Anchor href="https://github.com/shanperera/">
                <Box>
                  <Icon
                    className="pulsate-fwd"
                    element={Github}
                    elementColor="brand"
                    hoverColor="hover"
                    size="medium"
                  />
                </Box>
              </Anchor>
            </Box>
          </Box>
        </SplitBackgroundCard>
      </Box>
    );
  }
}

function Icon(props) {
  return useElementHover(props);
}

function SplitBackgroundHeader(props) {
  return (
    <Box
      gap="medium"
      background={props.background}
      direction={props.direction}
      fill={props.fill}
      flex={props.flex}
    >
      <Header
        title={props.title}
        textColor={props.textColor}
        topColor={props.topColor}
        bottomColor={props.background}
      ></Header>
      {props.children}
    </Box>
  );
}

function Header(props) {
  return (
    <Box>
      <Box align="center" background={props.topColor} height="xxsmall">
        <TitleCard isHeader={true}></TitleCard>
      </Box>
      <Box justify="start" align="center" background={props.background}>
        <TitleCard isHeader={false}>
          <Text
            margin={{ bottom: "small" }}
            color={props.textColor}
            weight="bold"
            size="xlarge"
          >
            {props.title}
          </Text>
        </TitleCard>
      </Box>
    </Box>
  );
}

function TitleCard(props) {
  if (props.isHeader) {
    return (
      <Card
        align="center"
        pad="small"
        fill="vertical"
        width="medium"
        elevation="none"
        background="light-2"
        round={{ size: "small", corner: "top" }}
      >
        {props.children}
      </Card>
    );
  }
  return (
    <Card
      align="center"
      pad={{ bottom: "medium" }}
      width="medium"
      elevation="none"
      background="light-2"
      round={{ size: "small", corner: "bottom" }}
    >
      {props.children}
    </Card>
  );
}
export default Contact;

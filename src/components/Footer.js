import React from "react";
import { Anchor, Box, Text } from "grommet";
import { Grommet, Node, Reactjs } from "grommet-icons";

class Footer extends React.Component {
  render() {
    return (
      <Box pad="small" background="#152238" height="xxsmall" flex="false">
        <Box justify="between" direction="row-responsive">
          <Text size="small">Copyright © {getCurrentYear()} Shan Perera</Text>

          <Box align="center" direction="row-responsive">
            <Text margin={{ right: "xsmall" }} size="small">
              Design and Functionality by{" "}
              <Anchor
                pad={{ right: "small" }}
                href="https://github.com/shanperera/portfolio-site"
                label="Shan Perera"
                target="_new"
              />
              .
            </Text>
            <Text margin={{ right: "xsmall" }}>
              <Anchor href="https://reactjs.org/">
                <Reactjs size="medium" color="plain" />
              </Anchor>
            </Text>
            <Text margin={{ right: "xsmall" }}>
              <Anchor href="https://nodejs.org/">
                <Node size="medium" color="plain" />
              </Anchor>
            </Text>
            <Text margin={{ right: "xsmall" }}>
              <Anchor href="https://v2.grommet.io/">
                <Grommet size="medium" color="plain" />
              </Anchor>
            </Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export default Footer;

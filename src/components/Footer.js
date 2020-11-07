import React from "react";
import { Anchor, Box, Text } from "grommet";
import { Grommet, Node, Reactjs } from "grommet-icons";

class Footer extends React.Component {
  render() {
    return (
      <Box pad="small" background="titleText" height="xxsmall" flex="false">
        <Box justify="between" direction="row-responsive">
          <Text size="small">Copyright © {getCurrentYear()} Shan Perera</Text>
          
          <Text size="small">
          Design and Functionality by{" "}
              <Anchor
                margin={{ right: "xsmall" }}
                pad={{ right: "small" }}
                href="https://github.com/shanperera/portfolio-site"
                label="Me."
                target="_new"
              />
            <Anchor href="https://reactjs.org/">
              <Reactjs size="small" color="plain" />{" "}
            </Anchor>
            <Anchor href="https://nodejs.org/">
              <Node size="small" color="plain" />{" "}
            </Anchor>
            <Anchor href="https://v2.grommet.io/">
              <Grommet size="small" color="plain" />
            </Anchor>{" "}
          </Text>
        </Box>
      </Box>
    );
  }
}

function getCurrentYear() {
  return new Date().getFullYear();
}

export default Footer;

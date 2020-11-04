import React from "react";
import { Anchor, Box, Text } from "grommet";
import { Favorite, Grommet, Node, Reactjs } from "grommet-icons";

class Footer extends React.Component {
  render() {
    return (
      <Box pad="small" background="#152238" height="xxsmall" flex="false">
        <Box justify="between" direction="row-responsive">
          <Text size="small">Copyright © {getCurrentYear()} Shan Perera</Text>
          
          <Text size="small">
            Created with <Favorite size="small" color="red" /> by Shan Perera:{" "}
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

function getCurrentYear(){
  return new Date().getFullYear();
}

export default Footer;

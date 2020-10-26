import React from "react";
import { Box, Text } from "grommet";
import { Favorite } from "grommet-icons";

class Footer extends React.Component {
  render() {
    return (
      <Box
        pad="small"
        background="dark-1"
        height="xxsmall"
        flex="false"
      >
        <Box justify="between" direction="row-responsive">
          <Text size="small">Copyright © 2020 Shan Perera </Text>
          <Text size="small">
            Built with <Favorite color="red" size="small" /> using ReactJS
          </Text>
        </Box>
      </Box>
    );
  }
}
export default Footer;

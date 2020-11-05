import React from "react";
import { Anchor, Box } from "grommet";

class Main extends React.Component {
  render() {
    return (
      <Box
        animation={{ type: "fadeIn", duration: "2000" }}
        background="light-1"
        overflow="auto"
      >
        <Anchor href="#Home" name="Home"></Anchor>
        {this.props.children}
      </Box>
      
    );
  }
}

export default Main;

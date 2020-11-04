import React from "react";
import { Anchor, Box } from "grommet";
import styled from "styled-components";


const StyledBox = styled(Box)`
background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
`;

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

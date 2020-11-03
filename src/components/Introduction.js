import React from "react";
import { Box, Text } from "grommet";
import styled from "styled-components";

const StyledBox = styled(Box)`
  background: #7d4cdb;
`;

class Introduction extends React.Component {
  render() {
    return (
      <StyledBox flex="false" direction="row-responsive">
        <Box
          align="center"
          justify="center"
          margin={{ horizontal: "xlarge", vertical: "xsmall" }}
          pad={{ horizontal: "xlarge", vertical: "small" }}
        >
          <Box pad={{ top: "large", horizontal: "large", bottom: "medium" }}>
            <Text weight="bold" color="white" size="xlarge">
              Hello, I'm Shan.{" "}
            </Text>
          </Box>
          <Box>
            <Text color="white" size="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              imperdiet nibh lorem, a commodo neque pharetra non. Sed cursus
              tortor in mauris mollis, quis viverra mi scelerisque. Aliquam id
              faucibus sem. Phasellus luctus magna nec tincidunt gravida. Fusce
              finibus facilisis purus. Phasellus sit amet lobortis augue, eget
              fermentum turpis. Pellentesque eu libero quis justo condimentum
              bibendum tempus vitae purus. Ommodo neque pharetra non. Sed cursus
              tortor in mauris mollis. Quis viverra mi scelerisque Aliquam id
              Phasellus sit amet.{" "}
            </Text>
          </Box>
        </Box>
      </StyledBox>
    );
  }
}

export default Introduction;

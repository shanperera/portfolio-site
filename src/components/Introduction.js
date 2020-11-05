import React from "react";
import { Anchor, Box, Text } from "grommet";
import { BodyItem } from "./BodyItem";

class Introduction extends React.Component {
  render() {
    return (
      <BodyItem
        background="brand"
        title="Hello, I'm Shan."
        anchorHref="#Skills"
        anchorName="Skills"
      >
        <Text color="white" size="medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          imperdiet nibh lorem, a commodo neque pharetra non. Sed cursus tortor
          in mauris mollis, quis viverra mi scelerisque. Aliquam id faucibus
          sem. Phasellus luctus magna nec tincidunt gravida. Fusce finibus
          facilisis purus. Phasellus sit amet lobortis augue, eget fermentum
          turpis. Pellentesque eu libero quis justo condimentum bibendum tempus
          vitae purus. Ommodo neque pharetra non. Sed cursus tortor in mauris
          mollis. Quis viverra mi scelerisque Aliquam id Phasellus sit amet.{" "}
        </Text>
      </BodyItem>
    );
  }
}

export default Introduction;

import React from "react";
import { Text } from "grommet";
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
          I am a full stack developer and I enjoy coding in my spare time, among
          many other things. I created this website to demonstrate my web design
          skills and learn React through practical application. This is my first
          project and website created using React. Feel free to reach out to me if you are
          interested in putting my skills to use, or if you want to talk about
          computers, cars, travelling, small form factor PCs, DIY engineering,
          woodworking, painting, video games or UX design.
        </Text>
      </BodyItem>
    );
  }
}

export default Introduction;

import React from "react";
import { Box, Text, Image } from "grommet";
import styled from "styled-components";
import "../styles/animista.css";
import AvatarImg from "../res/FlatCharacterAvatarWeb.svg";

const StyledBackground = styled(Box)`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const StyledText = styled(Text)`
  font-family: Bebas Neue;
  font-size: 3em;
`;

class TitleCard extends React.Component {
  render() {
    return (
      <StyledBackground
        direction="row-responsive"
        justify="center"
        align="center"
        flex="false"
      >
        <Box pad="small" align="center" width="100%">
          <Box height="small" width="small">
            <Image
              className="slide-in-blurred-top"
              fit="cover"
              src={AvatarImg}
            />
          </Box>
          <Box
            direction="row-responsive"
            align="center"
            justify="center"
            width="100%"
          >
            <StyledText
              className="slide-in-blurred-left"
              pad="small"
              size="xxlarge"
              margin="small"
              color="white"
            >
              Full Stack Developer
            </StyledText>
            <StyledText
              className="puff-in-center"
              pad="small"
              size="xxlarge"
              margin="small"
              color="white"
            >
              Hobbyist 
            </StyledText>
            <StyledText
              className="slide-in-blurred-right"
              pad="small"
              size="xxlarge"
              margin="small"
              color="white"
            >
              & Huge Nerd
            </StyledText>
          </Box>
          <Text margin="small" color="white">
            I write concise, clean code for work and in my spare time and love
            every minute of it.
          </Text>
        </Box>
      </StyledBackground>
    );
  }
}

export default TitleCard;

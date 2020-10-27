import React from "react";
import { Box, Card, CardBody, CardHeader, Text, Image } from "grommet";
import styled from "styled-components";
import "../styles/animista.css";
import AvatarImg from "../res/FlatCharacterAvatarWeb.svg";

const StyledBackground = styled(Box)`
background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const StyledCard = styled(Card)`
  background-image: linear-gradient(
    to top,
    #bdc2e8 0%,
    #bdc2e8 1%,
    #e6dee9 100%
  );
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
          <Image fit="cover" src={AvatarImg} />
          </Box>
          <StyledText pad="small" size="xxlarge" margin="small" color="white">
            Full Stack Developer, Hobbyist & Huge Nerd
          </StyledText>
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

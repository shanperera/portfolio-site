import React from "react";
import { Box, Text, Image } from "grommet";
import styled from "styled-components";
import "../styles/animista.css";
import AvatarImg from "../res/FlatCharacterAvatarWeb.svg";

const StyledText = styled(Text)`
  font-family: Bebas Neue;
`;

class TitleCard extends React.Component {
  render() {
    return (
      <Box
        direction="row"
        justify="center"
        align="center"
        flex="false"
        background="#FFFFFF"
      >
        <Box pad="small" align="center" width="100%">
          <Box height="small" width="small">
            <Image
              className="slide-in-blurred-top"
              fit="cover"
              src={AvatarImg}
            />
          </Box>
          <Box direction="row-responsive" align="center" justify="center">
            <HeaderText className="slide-in-blurred-left">
              Full Stack Developer,
            </HeaderText>
            <HeaderText className="puff-in-center">Hobbyist</HeaderText>
            <HeaderText className="slide-in-blurred-right">
              & Huge Nerd
            </HeaderText>
          </Box>
          <Text margin="small" color="accentText">
            I write concise, clean code for work and in my spare time and love
            every minute of it.
          </Text>
        </Box>
      </Box>
    );
  }
}

function HeaderText(props) {
  return (
    <StyledText
      className={props.className}
      pad="small"
      size="xxlarge"
      margin="small"
      color="titleText"
    >
      {props.children}
    </StyledText>
  );
}

export default TitleCard;

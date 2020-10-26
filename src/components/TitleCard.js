import React from "react";
import { Box, Card, CardBody, CardHeader, Image, Text } from "grommet";
import styled from "styled-components";

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

class TitleCard extends React.Component {
  render() {
    return (
      <StyledBackground
        direction="row-responsive"
        justify="center"
        align="center"
        flex="false"
      >
        <Card
          pad="xlarge"
          height="large"
          align="center"
          width="100%"
          round="xsmall"
        >
          <Text color="white" size="xxlarge">
            Shan Perera
          </Text>
          <Box
            fill="horizontal"
            pad="large"
            justify="between"
            gap="large"
            direction="row-responsive"
          >
            <Box>
              <StyledCard
                align="center"
                elevation="none"
                round="small"
                width="medium"
                height="small"
              >
                <CardHeader
                  pad="small"
                  justify="center"
                  fill="horizontal"
                  border={{ side: "bottom", size: "xsmall", color: "#7873f5" }}
                >
                  Hobbyist
                </CardHeader>
              </StyledCard>
            </Box>
            <Box>
              <StyledCard
                align="center"
                elevation="none"
                round="small"
                width="medium"
                height="small"
              >
                <CardHeader
                  pad="small"
                  justify="center"
                  fill="horizontal"
                  border={{ side: "bottom", size: "xsmall", color: "#7873f5" }}
                >
                  Developer
                </CardHeader>
              </StyledCard>
            </Box>
            <Box>
              <StyledCard
                align="center"
                elevation="none"
                round="small"
                width="medium"
                height="small"
              >
                <CardHeader
                  pad="small"
                  justify="center"
                  fill="horizontal"
                  border={{ side: "bottom", size: "xsmall", color: "#7873f5" }}
                >
                  Nerd
                </CardHeader>
              </StyledCard>
            </Box>
          </Box>
        </Card>
      </StyledBackground>
    );
  }
}

export default TitleCard;

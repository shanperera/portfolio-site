import React from "react";
import { Box, Grommet } from "grommet";
import Main from "./components/Main";
import SiteHeader from "./components/SiteHeader";
import TitleCard from "./components/TitleCard";
import Introduction from "./components/Introduction";

const theme = {
  global: {
    colors: {
      brand: "#a770ef",
    },
    font: {
      family: "Rajdhani",
      size: "18px",
      height: "24px",
    },
  },
  anchor: {
    hover: {
      textDecoration: "none",
      extend: {
        color: "#8e59d4",
      },
    },
  },
  box: {
    extend: "scroll-behavior: smooth;",
  },
  text: {
    xlarge: {
      size: "2em",
      height: "1em"
    },
    xxlarge: {
      "size": "3em",
      "height": "0.75em",
    }
  }
};

function App() {
  return (
    <Grommet theme={theme} full="true">
      <Box fill="true">
        <SiteHeader></SiteHeader>
        <Main>
          <TitleCard></TitleCard>
          <Introduction></Introduction>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;

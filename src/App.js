import React from "react";
import { Box, Grommet } from "grommet";
import Main from "./components/Main";
import SiteHeader from "./components/SiteHeader";
import TitleCard from "./components/TitleCard";

const theme = {
  global: {
    colors: {
      brand: "#a770ef",
    },
    font: {
      family: "Lato",
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
};

function App() {
  return (
    <Grommet theme={theme} full="true">
      <Box fill="true">
        <SiteHeader></SiteHeader>
        <Main>
          <TitleCard></TitleCard>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;

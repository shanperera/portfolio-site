import React from "react";
import { Box, Grommet } from "grommet";
import Main from "./components/Main";
import SiteHeader from "./components/SiteHeader";
import TitleCard from "./components/TitleCard";
import Introduction from "./components/Introduction";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';

const theme = {
  global: {
    colors: {
      titleText: "#152238",
      accentText: "#1c2e4a",
      hover: "#6FFFB0"
    },
    font: {
      family: "Rajdhani",
      size: "18px",
      height: "24px",
    }
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
      height: "1em",
    },
    xxlarge: {
      size: "3em",
      height: "0.75em",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} full="true">
      <Box fill="true">
        <SiteHeader></SiteHeader>
        <Main>
          <TitleCard></TitleCard>
          <Introduction></Introduction>
          <Skills></Skills>
          <Work></Work>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;

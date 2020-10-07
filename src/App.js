import React from "react";
import { Grommet } from 'grommet';
import SiteHeader from './components/SiteHeader';
import Body from './components/Body';
import Footer from './components/Footer'

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
        color: '#8e59d4',
      }
    }
  }
};

function App() {
  return (
    <Grommet theme={theme}>
      <SiteHeader></SiteHeader>
      <Body></Body>
      <Footer></Footer>
    </Grommet>
  );
}

export default App;

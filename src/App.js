import React from "react";
import { Grommet } from 'grommet';
import SiteHeader from './components/SiteHeader';
import 'semantic-ui-css/semantic.min.css'

const theme = {
  global: {
    colors: {
      brand: "#a770ef",
    },
    font: {
      family: "Sansita Swashed",
      size: "18px",
      height: "24px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <SiteHeader></SiteHeader>
    </Grommet>
  );
}

export default App;

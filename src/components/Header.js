import React from "react";
import { Box } from "grommet";

class Header extends React.Component {
  render() {
    return (
      <Box
        direction="row-responsive"
        align="center"
        justify="between"
        background="brand"
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation="small"
      >
          {this.props.children}
      </Box>
    );
  }
}

export default Header;

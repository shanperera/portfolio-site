import React from "react";
import { Box } from "grommet";

class Header extends React.Component {
  render() {
    return (
      <Box
        direction="row-responsive"
        align="center"
        justify="between"
        background={this.props.color}
        pad={this.props.pad}
        elevation={this.props.elevation}
        border={this.props.border}
      >
          {this.props.children}
      </Box>
    );
  }
}

export default Header;

import React from "react";
import { Anchor, Box, Text } from "grommet";

class SiteHeaderAnchors extends React.Component {
  render() {
    return (
      <Anchor
        href={this.props.href}
        color={this.props.color}
        label={this.props.label}
        icon={this.props.icon}
        hoverIndicator
      />
    );
  }
}

export default SiteHeaderAnchors;

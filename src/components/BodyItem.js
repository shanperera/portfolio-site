import React from "react";
import { Anchor, Box, Text } from "grommet";

export function BodyItem(props) {
  return (
    <Box flex="false" background={props.background} direction={props.direction}>
      <Anchor href={props.anchorHref} name={props.anchorName}></Anchor>
      <Box
        align="center"
        justify="center"
        margin={{ horizontal: "xlarge", vertical: "xsmall" }}
        pad={{ horizontal: "xlarge", vertical: "small" }}
      >
        
        <Box
          align="center"
          justify="center"
          pad={{ top: "large", horizontal: "xlarge", bottom: "medium" }}
        >
          <Text weight="bold" color={props.titleTextColor} size="xlarge">
            {props.title}
          </Text>
        </Box>
      </Box>
      <Box
        margin={{ horizontal: "large", vertical: "xsmall" }}
        pad={{ horizontal: "large", vertical: "small" }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

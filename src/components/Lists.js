import React from "react";
import { Box, Text } from "grommet";
import { Next } from "grommet-icons";

export function ListItem(props) {
  return (
    <Box flex="false" direction="row-responsive" align="center" overflow="auto">
      <Text size="medium" pad="small">
        <Box direction="row">
          <Box margin={{ right: "small"}} pad="xsmall">
            <Next color={props.imageColor} size="small" />
          </Box>
          {props.children}
        </Box>
      </Text>
    </Box>
  );
}

export function ListContainer(props) {
  return (
    <Box pad="small" direction="column" gap="xsmall">
      {props.children}
    </Box>
  );
}

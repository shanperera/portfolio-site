import React from "react";
import { Box, Text } from "grommet";
import { Next } from "grommet-icons";

export function ListItem(props) {
    return (
      <Box direction="row-responsive" align="center" overflow="auto">
        <Text size="medium" pad="small">
          <Box direction="row-responsive">
            <Box pad="xsmall">
              <Next color="brand" size="small" />
            </Box>
            {props.children}
          </Box>
        </Text>
      </Box>
    );
  }
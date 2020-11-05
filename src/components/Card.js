import React from "react";
import { Box, Card as GrommetCard } from "grommet";

export function CardHeader(props) {
  return (
    <GrommetCard
      align="center"
      justify="center"
      gap="small"
      elevation="none"
      pad="medium"
      background="light-2"
      width="medium"
      round={{ size: "small", corner: "top" }}
    >
      {props.children}
    </GrommetCard>
  );
}

export function Card(props) {
  return (
    <Box
      border={{ color: "light-4", size: "xsmall", side: "bottom" }}
      round={{ size: "small", corner: "bottom" }}
    >
      <GrommetCard
        align="center"
        justify="center"
        gap="small"
        elevation="none"
        pad="small"
        background="light-2"
        width="medium"
        round={{ size: "small", corner: "bottom" }}
        border={{ color: "light-4", size: "xsmall", side: "vertical" }}
      >
        {props.children}
      </GrommetCard>
    </Box>
  );
}

export function CardContainer(props) {
  return (
    <Box
      direction="row-responsive"
      justify="between"
      gap="large"
    >
      {props.children}
    </Box>
  );
}

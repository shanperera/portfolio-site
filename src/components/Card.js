import React from "react";
import { Box, Card as GrommetCard } from "grommet";

export function SplitBackgroundCard(props) {
  return (
    <Box fill="true" background={props.bottomColor}>
      <Box
        background={props.background}
        direction={props.direction}
        fill={props.fill}
        flex={props.flex}
      >
        <SplitBackgroundCardComponent
          pad={{ top: "medium"}}
          header={true}
          title={props.title}
          topColor={props.topColor}
        ></SplitBackgroundCardComponent>
      </Box>
      <SplitBackgroundCardComponent pad={{ bottom: "large" }} bottomColor={props.bottomColor}>
        {props.children}
      </SplitBackgroundCardComponent>
    </Box>
  );
}

function SplitBackgroundCardComponent(props) {
  if (props.header) {
    return (
      <Box pad={props.pad}>
        <Box flex align="center" background={props.topColor} height="xxsmall">
          <GrommetCard
            align="center"
            pad="small"
            fill="vertical"
            width="medium"
            elevation="none"
            background="light-2"
            round={{ size: "small", corner: "top" }}
          >
            {props.title}
          </GrommetCard>
        </Box>
      </Box>
    );
  }

  return (
    <Box pad={props.pad}>
      <Box flex align="center" background={props.bottomColor} height="xxsmall">
        <GrommetCard
          align="center"
          pad="small"
          fill="vertical"
          width="medium"
          elevation="none"
          background="light-2"
          round={{ size: "small", corner: "bottom" }}
        >
          {props.children}
        </GrommetCard>
      </Box>
    </Box>
  );
}

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
    <Box direction="row-responsive" justify="between" gap="large">
      {props.children}
    </Box>
  );
}

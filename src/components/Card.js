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
          pad={props.topPad}
          header={true}
          title={props.title}
          topColor={props.topColor}
          color={props.cardTopColor}
        ></SplitBackgroundCardComponent>
      </Box>
      <SplitBackgroundCardComponent
        pad={props.bottomPad}
        bottomColor={props.bottomColor}
        color={props.cardBottomColor}
      >
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
            round={{ size: "small", corner: "top" }}
            background={props.color}
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
          round={{ size: "small", corner: "bottom" }}
          background={props.color}
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

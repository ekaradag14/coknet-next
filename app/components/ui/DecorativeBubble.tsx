import Box from "@mui/material/Box";
import { SxProps } from "@mui/material";
import React from "react";

interface DecorativeBubbleProps {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
  width?: string | number;
  height?: string | number;
  color?: string;
  opacity?: number;
  zIndex?: number;
  sx?: SxProps;
}

const DecorativeBubble: React.FC<DecorativeBubbleProps> = ({
  top,
  left,
  right,
  bottom,
  width = 150,
  height = 150,
  color = "#F6EB23",
  opacity = 0.15,
  zIndex = 0,
  sx = {},
}) => (
  <Box
    sx={{
      position: "absolute",
      top,
      left,
      right,
      bottom,
      width,
      height,
      borderRadius: "50%",
      background: color,
      opacity,
      zIndex,
      ...sx,
    }}
  />
);

export default DecorativeBubble; 
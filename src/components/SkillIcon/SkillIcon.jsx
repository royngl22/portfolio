import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ContainerComp from "../ContainerComp/ContainerComp";
import { StyledParagraph } from "../Typography/Typography";

export default function SkillIcon({ alt, src, label }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "center",
        //   width: "66px",
        // display: "inline-block",
        //   padding: "5px",
        // width: "70px",
        // height: "65px",
        // border: "1px solid blue",
        // flex: 1,
        width: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <Box
          sx={{
            width: "65px",
            height: "65px",
            overflow: "hidden",
            // border: "1px solid red",
          }}
        >
          <img src={src} alt={alt} width="100%" height="100%" />
        </Box>
        <StyledParagraph textAlign={"center"}>{label}</StyledParagraph>
      </Box>
    </Box>
  );
}

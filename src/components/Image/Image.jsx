import React from "react";
import { Box } from "@mui/material";
import ImageStyle from "./Image.Style";

export default function Image() {
  const style = ImageStyle();

  return (
    <Box sx={style.frame}>
      <Box sx={style.img_wrapper}>
        <img
          src="/img/sample.jpg"
          alt="profile-pict"
          width="100%"
          height="100%"
        />
      </Box>
    </Box>
  );
}

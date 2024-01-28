import React from "react";
import { Box, Chip } from "@mui/material";
import { SectionTitleStyle } from "./SectionTitle.Style";

export default function SectionTitle({ label }) {
  const style = SectionTitleStyle();

  return (
    <Box sx={style.wrapper}>
      <Chip label={label} sx={style.chip} />
    </Box>
  );
}

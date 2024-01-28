import React from "react";
import { Box } from "@mui/material";
import { ToggleMenuStyle } from "./ToggleMenu.Style";

export default function ToggleMenu() {
  return (
    <Box sx={ToggleMenuStyle}>
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" />
        <span />
        <span />
        <span />
      </label>
    </Box>
  );
}

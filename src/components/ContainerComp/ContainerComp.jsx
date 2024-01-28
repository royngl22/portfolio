import { Box, Container } from "@mui/material";
import React from "react";

export default function ContainerComp({ children, sx, maxWidth }) {
  return (
    <Box sx={sx}>
      <Container maxWidth={maxWidth}>{children}</Container>
    </Box>
  );
}

// import { Box } from "@mui/material";
import { css, useTheme } from "@mui/material";

export function NavBarStyle(params) {
  const theme = useTheme();

  const rgb = theme.palette.mode === "dark" ? 0 : 255;
  const glassEffect = css`
    background: rgba(${rgb}, ${rgb}, ${rgb}, 0.07);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  `;

  return {
    glassEffect,
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 0",
      alignItems: "center",
    },
  };
}

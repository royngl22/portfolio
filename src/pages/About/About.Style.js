import { styled, useTheme } from "@mui/material/styles";

export default function AboutStyle() {
  const theme = useTheme();

  return {
    container: {
      background: theme.palette.myColor.gray50,
    },

    root: {
      padding: "50px 0",
      [theme.breakpoints.up("md")]: {
        padding: "100px 0",
      },
    },

    paragraph: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "40px 0 0",
    },
  };
}

import { useTheme } from "@mui/material";

export const SkillStyle = () => {
  const theme = useTheme();

  return {
    container: {
      background: theme.palette.myColor.grayDefault,
    },

    root: {
      padding: "84px 0",
    },

    title: {
      padding: "50px 0",
      textAlign: "center",
    },

    content: {
      display: "flex",
      justifyContent: "center",
      padding: "50px 0 0",
    },

    wrapper: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "space-between",

      [theme.breakpoints.up("md")]: {
        gap: "80px",
      },
    },
  };
};

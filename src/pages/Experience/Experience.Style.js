import { useTheme } from "@mui/material";

export function ExperienceStyle(idx) {
  const theme = useTheme();

  return {
    root: {
      background: theme.palette.myColor.gray50,
    },

    wrapper: {
      padding: "54px 0",
    },

    content: {
      padding: "54px 0",
    },

    accordion_container: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      overflow: "hidden",
      borderRadius: "12px",
    },

    header: {
      width: "100%",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "&>*:nth-of-type(1)": {
          flex: 1,
        },
        "&>*:nth-of-type(2)": {
          flex: 2,
        },
      },
    },

    accordion: {
      position: "static",
      borderRadius: "12px",
      background: theme.palette.myColor.gray100,
    },

    accordion_details: {
      paddingY: "20px",
    },

    about: {
      textAlign: "justify",
      marginBottom: "15px",
    },

    company: {
      marginTop: idx === 2 ? "3px" : "20px",
      fontWeight: 700,

      [theme.breakpoints.up("md")]: {
        marginTop: 0,
      },
    },
  };
}

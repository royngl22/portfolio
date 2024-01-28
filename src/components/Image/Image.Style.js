import { useTheme } from "@mui/material/styles";

export default function ImageStyle() {
  const theme = useTheme();

  return {
    frame: {
      width: "300px",
      height: "280px",
      border: `18px solid ${theme.palette.myColor.gray200}`,
      borderTop: "none",
      position: "relative",
      [theme.breakpoints.up("md")]: {
        border: `38px solid ${theme.palette.myColor.gray200}`,
        borderTop: "none",
        borderLeft: "none",
        width: "250px",
        height: "300px",
      },
    },

    img_wrapper: {
      width: "240px",
      height: "280px",
      position: "absolute",
      top: "-30px",
      left: "50%",
      transform: "translate(-50%, 0)",
      [theme.breakpoints.up("md")]: {
        top: "-25px",
        left: "85px",
      },
    },
  };
}

import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

export const PulseAnimation = keyframes`
  0% {
    border-radius: 50%;
    box-shadow: 0 0 0 0 #69ffa8;
  }

  100% {
    border-radius: 50%;
    box-shadow: 0 0 0 8px #69ffa800;
  }`;

export default function HeroStyle(theme) {
  return {
    container: {
      background: theme.palette.myColor.grayDefault,
    },
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "48px",
      padding: "45px 0 55px",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        padding: "85px 0 100px",
        gap: "88px",
        alignItems: "center",
      },
    },
    img_Wrapper: {
      display: "flex",
      justifyContent: "center",
      padding: "50px 0 0",
      [theme.breakpoints.up("md")]: {
        order: 2,
      },
    },

    content: {
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      [theme.breakpoints.up("md")]: {
        order: 1,
      },
    },

    information_wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },

    information: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
  };
}

export const StyledIcon = styled(Box)(({ theme, animation }) => ({
  display: "flex",
  fontSize: "24px",
  animation: animation,
  [theme.breakpoints.up("md")]: {
    fontSize: "26px",
  },
}));

// Reusable Styled Component
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: theme.palette.myColor.gray600,
  lineHeight: "24px",
  fontStyle: "normal",

  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    lineHeight: "26px",
  },
}));

export const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.myColor.gray900,
  fontSize: "36px",
  fontStyle: "normal",
  fontWeight: 600,
  letterSpacing: "-0.6px",
  lineHeight: "40px",
  marginBottom: "20px",

  [theme.breakpoints.up("md")]: {
    fontWeight: 700,
    fontSize: "50px",
  },
}));

export const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  color: theme.palette.myColor.gray900,
  lineHeight: "32px",
  fontStyle: "normal",
  letterSpacing: "-0.48px",
}));

import { useTheme } from "@mui/material";

export const SectionTitleStyle = () => {
  const theme = useTheme();

  return {
    wrapper: {
      display: "flex",
      justifyContent: "center",
    },

    chip: {
      background: theme.palette.myColor.gray200,
      padding: "4px 20px",
      color: theme.palette.myColor.gray600,
      fontWeight: 500,
      fontSize: "16px",
    },
  };
};

import { timelineItemClasses } from "@mui/lab/TimelineItem";
import { useTheme } from "@mui/material";

export default function ExperienceDetailStyle() {
  const theme = useTheme();
  return {
    root: {
      [theme.breakpoints.up("md")]: {
        paddingLeft: "80px",
      },
    },

    timeline: {
      [`& .${timelineItemClasses.root}:before`]: {
        flex: 0,
        padding: 0,
      },
    },

    ul: {
      marginTop: "20px",
    },

    li: {
      marginBottom: "10px",
      maxWidth: 900,
    },
    company: {
      fontWeight: 700,
    },
  };
}

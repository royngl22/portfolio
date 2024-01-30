import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { StyledParagraph } from "../Typography/Typography";
import { Box } from "@mui/material";
import ExperienceDetailStyle from "./ExperienceDetail.Style";

export default function ExperienceDetail({ details }) {
  const style = ExperienceDetailStyle();

  return (
    <Box sx={style.root}>
      <Timeline sx={style.timeline}>
        {details.map((val, idx) => (
          <TimelineItem key={idx}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <StyledParagraph sx={style.company}>
                {val.company}
              </StyledParagraph>
              <StyledParagraph>{val.role}</StyledParagraph>
              <StyledParagraph>{val.year}</StyledParagraph>

              <ul style={style.ul}>
                {val.desc.map((item, id) => (
                  <li key={id} style={style.li}>
                    <StyledParagraph>{item}</StyledParagraph>
                  </li>
                ))}
              </ul>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

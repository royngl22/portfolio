import React, { useState } from "react";
import ContainerComp from "../../components/ContainerComp/ContainerComp";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  Box,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { ExperienceData } from "./Experience.Data";
import { ExperienceStyle } from "./Experience.Style";
import { FaArrowDown } from "react-icons/fa";
import { StyledParagraph } from "../../components/Typography/Typography";
import ExperienceDetail from "../../components/ExperienceDetail/ExperienceDetail";

export default function Experience() {
  const data = ExperienceData();
  const style = ExperienceStyle();

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContainerComp sx={style.root}>
      <Box sx={style.wrapper}>
        <SectionTitle label="Experience" />

        <Box sx={style.content}>
          <Box sx={style.accordion_container}>
            {data.experienceList.map((val, idx) => (
              <Accordion
                expanded={expanded === `panel${idx}`}
                onChange={handleChange(`panel${idx}`)}
                key={idx}
                elevation={0}
                sx={style.accordion}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={<FaArrowDown />}
                  aria-controls={`panel${idx}-content`}
                  id={`panel${idx}-header`}
                >
                  <Box sx={style.header}>
                    <Box>
                      <img
                        src={val.img_src}
                        alt={val.img_alt}
                        width={val.img_width}
                        height={val.img_height}
                      />
                    </Box>

                    <Box>
                      <StyledParagraph sx={ExperienceStyle(idx).company}>
                        {val.company}
                      </StyledParagraph>
                      <StyledParagraph>{val.role}</StyledParagraph>
                      <StyledParagraph>{val.duration}</StyledParagraph>
                    </Box>
                  </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails sx={style.accordion_details}>
                  {val.about.map((val, idx) => (
                    <StyledParagraph sx={style.about} key={idx}>
                      {val}
                    </StyledParagraph>
                  ))}
                  <ExperienceDetail details={val.details} />
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
    </ContainerComp>
  );
}

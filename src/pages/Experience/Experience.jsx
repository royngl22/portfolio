import React, { useState } from "react";
import { Box, useTheme, Typography, Divider, Container } from "@mui/material";
import ContainerComp from "../../components/ContainerComp/ContainerComp";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaArrowDown } from "react-icons/fa";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import nawaDataImg from "./../../assets/img/nawadata.svg";
import febeImg from "./../../assets/img/febe.png";
import celeratesImg from "./../../assets/img/celerates.svg";

import { translate } from "../../util/StringTranslation";
import { StyledParagraph } from "./../../components/Typography/Typography";

export default function Experience() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const experienceList = [
    {
      company: "PT. Nawa Data Solutions",
      duration: `2022 - ${translate("present")}`,
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis suscipit fugit modi at, atque ratione!`,
      handle: translate("nawadata_client"),
      role: "PS Developer",
      img_src: nawaDataImg,
      img_alt: "nawadata-img",
      img_width: "150px",
      img_height: "45px",
    },
    {
      company: "PT. Febe Teknologi Digital",
      duration: `Augst 2021 - Feb 2022`,
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis suscipit fugit modi at, atque ratione!`,
      handle: translate("nawadata_client"),
      role: "Backend Developer",
      img_src: febeImg,
      img_alt: "febe-img",
      img_width: "150px",
      img_height: "25px",
    },
    {
      company: "PT. Mitra Talenta Group",
      duration: `2019 - 2021`,
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis suscipit fugit modi at, atque ratione!`,
      handle: translate("nawadata_client"),
      role: "EAD Developer",
      img_src: celeratesImg,
      img_alt: "celerate-img",
      img_width: "200px",
      img_height: "105px",
    },
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <ContainerComp sx={{ background: theme.palette.myColor.gray50 }}>
      <Box sx={{ padding: "54px 0" }}>
        <SectionTitle label="Experience" />

        <Box sx={{ padding: "54px 0" }}>
          <Container
            maxWidth={"md"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              overflow: "hidden",
              borderRadius: "12px",
            }}
            disableGutters
          >
            {experienceList.map((val, idx) => (
              <Accordion
                expanded={expanded === `panel${idx}`}
                onChange={handleChange(`panel${idx}`)}
                disableGutters
                key={idx}
                elevation={0}
                sx={{
                  position: "static",
                  borderRadius: "12px",
                  background: theme.palette.myColor.gray100,
                }}
              >
                <AccordionSummary
                  expandIcon={<FaArrowDown />}
                  aria-controls={`panel${idx}-content`}
                  id={`panel${idx}-header`}
                >
                  <Box>
                    <img
                      src={val.img_src}
                      alt={val.img_alt}
                      width={val.img_width}
                      height={val.img_height}
                    />
                    <StyledParagraph
                      sx={{
                        marginTop: idx === 2 ? "3px" : "20px",
                        fontWeight: 700,
                      }}
                    >
                      {val.company}
                    </StyledParagraph>
                    <StyledParagraph>{val.role}</StyledParagraph>
                    <StyledParagraph>{val.duration}</StyledParagraph>
                  </Box>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                  <StyledParagraph>{val.handle}</StyledParagraph>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Box>
      </Box>
    </ContainerComp>
  );
}

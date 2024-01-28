import React from "react";
import { Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ContainerComp from "../../components/ContainerComp/ContainerComp";
import SkillIcon from "../../components/SkillIcon/SkillIcon";
import { SkillStyle } from "./Skills.Style";
import { StyledTitle } from "../../components/Typography/Typography";
import { SkillsData } from "./Skills.Data";

export default function Skills() {
  const style = SkillStyle();
  const data = SkillsData();

  return (
    <ContainerComp sx={style.container}>
      <Box sx={style.root}>
        <SectionTitle label="Skills" />

        <Box sx={style.content}>
          <Box sx={style.wrapper}>
            {data.map((val, idx) => (
              <SkillIcon
                alt={val.alt}
                src={val.src}
                label={val.label}
                key={idx}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </ContainerComp>
  );
}

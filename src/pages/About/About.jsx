import React from "react";
import ContainerComp from "../../components/ContainerComp/ContainerComp";
import { Box } from "@mui/material";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import {
  StyledTitle,
  StyledParagraph,
} from "../../components/Typography/Typography";
import AboutStyle from "./About.Style";

export default function About() {
  const style = AboutStyle();

  const about = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ullam sint vitae ipsum, iure inventore earum nisi nemo cum ad.`,

    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam molestias non obcaecati consectetur omnis aliquam officia iste, soluta odit rem expedita voluptatibus sapiente modi est voluptas. Impedit nisi sed, doloribus corrupti eaque dolorem fuga omnis laudantium autem modi aperiam earum?`,

    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis amet veniam at, animi odio optio reprehenderit iste magnam magni porro molestiae. Aperiam nisi debitis neque, id non iure mollitia quibusdam architecto eos commodi voluptatibus praesentium repellendus beatae harum recusandae cumque nesciunt possimus! Temporibus eius eligendi officia facere cum corrupti!`,

    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptate perspiciatis pariatur minima iure. Facilis eligendi voluptatibus officia et ducimus quis reiciendis laborum dolorum est.`,
  ];

  return (
    <ContainerComp sx={style.container}>
      <Box sx={style.root}>
        <SectionTitle label="About" />

        <Box sx={style.paragraph}>
          {about.map((val, idx) => (
            <StyledParagraph key={idx} textAlign="justify">
              {val}
            </StyledParagraph>
          ))}
        </Box>
      </Box>
    </ContainerComp>
  );
}

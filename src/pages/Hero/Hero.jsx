import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContainerComp from "./../../components/ContainerComp/ContainerComp";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import Image from "../../components/Image/Image";
import HeroStyle, { StyledIcon, PulseAnimation } from "./Hero.Style";
import {
  StyledParagraph,
  StyledHeading,
} from "../../components/Typography/Typography";

export default function Hero() {
  const theme = useTheme();
  const style = HeroStyle(theme);

  const information = [
    {
      icon: <IoLocationOutline />,
      label: "Jakarta, Indonesia",
      color: theme.palette.myColor.gray600,
      animation: "none",
    },
    {
      icon: <GoDotFill />,
      label: "Available for new projects",
      color: theme.palette.emerald,
      animation: `1.2s ${PulseAnimation} infinite ease-in-out`,
    },
  ];

  return (
    <ContainerComp sx={style.container}>
      <Box sx={style.root}>
        <Box sx={style.img_Wrapper}>
          <Image />
        </Box>

        <Box sx={style.content}>
          <Box>
            <StyledHeading>Hi, I'm Roy 👋️</StyledHeading>
            <StyledParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam veritatis atque nisi corrupti, voluptatem libero neque
              repellat quae aliquid omnis incidunt error. Sapiente, eum? Fugit
              harum natus aliquid, commodi eius temporibus. Voluptas nostrum
              vitae saepe in id et error dolores?
            </StyledParagraph>
          </Box>

          <Box sx={style.information_wrapper}>
            {information.map((val, idx) => (
              <Box key={idx} sx={style.information}>
                <StyledIcon color={val.color} animation={val.animation}>
                  {val.icon}
                </StyledIcon>
                <StyledParagraph>{val.label}</StyledParagraph>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </ContainerComp>
  );
}

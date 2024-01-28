import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import ContainerComp from "../ContainerComp/ContainerComp";
import ToggleTheme from "../ToggleTheme/ToggleTheme";
import ToggleMenu from "../ToggleMenu/ToggleMenu";
import { NavBarStyle } from "./NavBar.Style";
import { LuMenu } from "react-icons/lu";

export default function NavBar() {
  const theme = useTheme();
  const style = NavBarStyle();
  return (
    <ContainerComp sx={style.glassEffect}>
      <Box sx={style.wrapper}>
        <Typography
          sx={{
            border: `1px solid ${theme.palette.myColor.gray600}`,
            padding: "2px 10px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "24px",
            color: theme.palette.myColor.gray600,
          }}
        >
          {"<RN />"}
        </Typography>
        <ToggleTheme />
        {/* <ToggleMenu /> */}
        <LuMenu
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: theme.palette.myColor.gray600,
            borderRadius: "8px",
          }}
        />
      </Box>
    </ContainerComp>
  );
}

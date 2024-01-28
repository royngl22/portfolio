import { useTheme, css } from "@mui/material/styles";

export function ToggleMenuStyle() {
  const theme = useTheme();

  const style = css`
    .burger {
      position: relative;
      width: 30px;
      height: 20px;
      background: transparent;
      cursor: pointer;
      display: block;
    }

    .burger input {
      display: none;
    }

    .burger span {
      display: block;
      position: absolute;
      height: 4px;
      width: 100%;
      background: ${theme.palette.myColor.gray600};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;
    }

    .burger span:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    .burger span:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    .burger span:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }

    .burger input:checked ~ span:nth-of-type(1) {
      transform: rotate(40deg);
      top: -2px;
      left: 0px;
    }

    .burger input:checked ~ span:nth-of-type(2) {
      width: 0%;
      opacity: 0;
    }

    .burger input:checked ~ span:nth-of-type(3) {
      transform: rotate(-40deg);
      top: 16px;
      left: 0;
    }
  `;

  return style;
}

import { useContext } from "react";
import cssharpImg from "./../../assets/img/csharp.svg";
import cssImg from "./../../assets/img/css.svg";
import dockerImg from "./../../assets/img/docker.svg";
import echoImg from "./../../assets/img/echo.png";
import gitImg from "./../../assets/img/git.svg";
import goImg from "./../../assets/img/go.svg";
import htmlImg from "./../../assets/img/html.svg";
import jenkinsImg from "./../../assets/img/jenkins.svg";
import jsImg from "./../../assets/img/js.svg";
import muiImg from "./../../assets/img/mui.svg";
import netImg from "./../../assets/img/net.svg";
import nextjsImgLight from "./../../assets/img/nextjs.svg";
import nextjsImgDark from "./../../assets/img/nextjs-3.svg";
import reactImg from "./../../assets/img/react.svg";
import sqlImg from "./../../assets/img/sql.png";
import tailwindImg from "./../../assets/img/tailwind.svg";
import tsImg from "./../../assets/img/ts.svg";
import { Context } from "../../context/GlobalContext";

export const SkillsData = () => {
  const { theme } = useContext(Context);
  const { isDark } = theme;

  return [
    { src: cssharpImg, alt: "c#", label: "C#" },
    { src: netImg, alt: "asp-img", label: "ASP.NET " },
    { src: sqlImg, alt: "mssql-img", label: "Ms SQL Server" },
    { src: goImg, alt: "golang-img", label: "Golang" },
    { src: echoImg, alt: "echo-img", label: "Echo" },
    { src: reactImg, alt: "react-img", label: "ReactJS" },
    {
      src: isDark ? nextjsImgDark : nextjsImgLight,
      alt: "nextjs-img",
      label: "NextJS",
    },
    { src: muiImg, alt: "mui-img", label: "Material UI" },
    { src: tailwindImg, alt: "tailwind-img", label: "Tailwind" },
    { src: jsImg, alt: "js-img", label: "Javascript" },
    { src: tsImg, alt: "ts-img", label: "Typescript" },
    { src: htmlImg, alt: "html-img", label: "HTML" },
    { src: cssImg, alt: "css-img", label: "CSS" },
    { src: dockerImg, alt: "docker-img", label: "Docker" },
    { src: jenkinsImg, alt: "jenkins-img", label: "Jenkins" },
    { src: gitImg, alt: "git-img", label: "Git" },
  ];
};

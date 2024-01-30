import nawaDataImg from "./../../assets/img/nawadata.svg";
import febeImg from "./../../assets/img/febe.png";
import celeratesImg from "./../../assets/img/celerates.svg";
import {
  LangTranslate,
  InlineLangTranslate,
} from "../../util/StringTranslation";
import wording from "../../util/ExperienceWording";

export const ExperienceData = () => {
  const experienceList = [
    {
      company: "PT. Nawa Data Solutions",
      duration: `2022 - present`,
      role: "PS Developer",
      img_src: nawaDataImg,
      img_alt: "nawadata-img",
      img_width: "150px",
      img_height: "45px",
      about: [
        LangTranslate("nawadata_about_1", wording),
        LangTranslate("nawadata_about_2", wording),
        LangTranslate("nawadata_about_3", wording),
      ],
      details: [
        {
          company: "PT.Asuransi Astra Buana",
          role: "Fullstack Developer",
          year: `2023 - ${InlineLangTranslate("Sekarang", "Present")}`,
          desc: [
            LangTranslate("nawadata_fs_jobdesc_1", wording),
            LangTranslate("nawadata_fs_jobdesc_2", wording),
            LangTranslate("nawadata_fs_jobdesc_3", wording),
            LangTranslate("nawadata_fs_jobdesc_4", wording),
            LangTranslate("nawadata_fs_jobdesc_5", wording),
          ],
        },
        {
          company: "PT.Asuransi Astra Buana",
          role: "Frontend Developer",
          year: "2022",
          desc: [
            LangTranslate("nawadata_fe_jobdesc_1", wording),
            LangTranslate("nawadata_fe_jobdesc_2", wording),
            LangTranslate("nawadata_fe_jobdesc_3", wording),
            LangTranslate("nawadata_fe_jobdesc_4", wording),
          ],
        },
      ],
    },
    {
      company: "PT. Febe Teknologi Digital",
      duration: `Augst 2021 - Feb 2022`,
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis suscipit fugit modi at, atque ratione!`,
      handle: LangTranslate("nawadata_client", wording),
      role: "Backend Developer",
      img_src: febeImg,
      img_alt: "febe-img",
      img_width: "150px",
      img_height: "25px",
      about: [],
      details: [
        {
          company: "PT Profesional Telekomunikasi Indonesia (Protelindo)",
          role: "Frontend Developer",
          year: "2022 - 2023",
          desc: [],
        },
      ],
    },
    {
      company: "PT. Mitra Talenta Group",
      duration: `2019 - 2021`,
      desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis suscipit fugit modi at, atque ratione!`,
      handle: LangTranslate("nawadata_client", wording),
      role: "EAD Developer",
      img_src: celeratesImg,
      img_alt: "celerate-img",
      img_width: "160px",
      img_height: "85px",
      about: [],
      details: [
        {
          company: "PT.Smartfren Telecom",
          role: "Frontend Developer",
          year: "2022 - 2023",
          desc: [],
        },
        {
          company: "PT.Crowde Membangun Bangsa",
          role: "Frontend Developer",
          year: "2022 - 2023",
          desc: [],
        },
      ],
    },
  ];

  return { experienceList };
};

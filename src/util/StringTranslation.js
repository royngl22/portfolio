import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import { ID, EN } from "./Constant";

const getLangCode = () => {
  const { language } = useContext(Context);
  const { langCode } = language;

  return langCode;
};

export const LangTranslate = (param, wording) => {
  const code = getLangCode() || EN;

  const find = wording.find((obj) => obj.key === param);
  if (!find) return param;

  return find[code];
};

export const InlineLangTranslate = (id, en) => {
  const code = getLangCode() || EN;
  if (code == ID) return id;
  return en;
};

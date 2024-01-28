import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import { ID, EN } from "./Constant";

const wording = [
  {
    key: "nawadata_client",
    [ID]: `Klien NawaData yang pernah saya handle`,
    [EN]: `The NawaData clients that I have handled`,
  },
  {
    key: "present",
    [ID]: `Sekarang`,
    [EN]: `Present`,
  },
];

export const translate = (param) => {
  const { language } = useContext(Context);
  const { langCode } = language;
  const code = langCode || ID;

  const find = wording.find((obj) => obj.key === param);
  if (!find) return param;

  return find[code];
};

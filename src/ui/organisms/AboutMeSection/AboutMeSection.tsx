import { Text } from "atoms";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";

export const AboutMeSection = () => {
  const { t } = useTranslation();
  return (
    <div className="grid gap-6 max-xl:order-first">
      <Text text={t("about_me_text")} className="title-m xl:title-xl" />
      <div className="paragraph-m text-justify">
        <p className="">{parse(t("about_me.1"))}</p>
        <p className="mt-4">{parse(t("about_me.2"))}</p>
        <p className="mt-4">{parse(t("about_me.3"))}</p>
        <p className="mt-4">{parse(t("about_me.4"))}</p>
      </div>
    </div>
  );
};

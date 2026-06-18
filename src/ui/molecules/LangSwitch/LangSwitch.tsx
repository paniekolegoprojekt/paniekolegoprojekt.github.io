import { Text } from "atoms";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export const LangSwitch = () => {
  const { i18n } = useTranslation();

  const onClick = (lang: string) => i18n.changeLanguage(lang);
  const isActive = (lang: string) => i18n.language === lang;

  const LangBtn = ({ lang }: { lang: string }) => (
    <button onClick={() => onClick(lang)}>
      <Text
        className={twMerge(
          "paragraph-xl uppercase",
          isActive(lang) ? "title-xl" : "text-ui-primary-grey",
        )}
        text={lang}
      />
    </button>
  );

  return (
    <div className="flex gap-2 h-fit ce content-center">
      <LangBtn lang="pl" />
      <Text className="paragraph-xl " text="|" />
      <LangBtn lang="en" />
    </div>
  );
};

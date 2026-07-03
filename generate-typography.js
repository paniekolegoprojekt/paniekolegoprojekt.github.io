// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plugin = require("tailwindcss/plugin");

const generateTypography = ({ addComponents }) => {
  const typography = {
    ".label-s": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `12px`,
    },
    ".label-m": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "600",
      ["font-size"]: `16px`,
    },
    ".label-l": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `20px`,
    },
    ".title-3xl": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "64px",
    },
    ".title-xl": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "32px",
    },
    ".title-l": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "32px",
    },
    ".title-m": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "24px",
    },
    ".title": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "18px",
    },
    ".title-s": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "16px",
    },

    ".title-xs": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "14px",
    },

    ".title-xxs": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "12px",
    },

    ".paragraph-xl": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "24px",
      ["font-weight"]: "450",
    },

    ".paragraph-l": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "18px",
      ["font-weight"]: "450",
    },

    ".paragraph-m": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "16px",
      ["font-weight"]: "450",
    },
    ".paragraph-s": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "14px",
      ["font-weight"]: "450",
    },
    ".paragraph-xs": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "12px",
      ["font-weight"]: "450",
    },
  };

  addComponents(typography);
};

export default plugin(generateTypography);

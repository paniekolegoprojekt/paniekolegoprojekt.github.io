const plugin = require("tailwindcss/plugin");

const generateTypography = ({ addComponents, theme }) => {
  const typography = {
    ".label-s": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `12px`,
    },
    ".label-m": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `16px`,
    },
    ".label": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `18px`,
    },
    ".label-l": {
      ["font-family"]: "Montserrat",
      ["font-size"]: `32px`,
    },
    ".title-xl": {
      ["font-family"]: "Montserrat",
      ["font-weight"]: "700",
      ["font-size"]: "48px",
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

    ".paragraph-xl": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "24px",
    },

    ".paragraph-l": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "18px",
    },

    ".paragraph-m": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "16px",
    },
    ".paragraph-s": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "14px",
    },
    ".paragraph-xs": {
      ["font-family"]: "Montserrat",
      ["font-size"]: "12px",
    },
  };

  addComponents(typography);
};

export default plugin(generateTypography);

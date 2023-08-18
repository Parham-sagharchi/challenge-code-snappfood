const defaultTheme = {
  palette: {
    primary: {
      light: "#fff",
      main: "#ff00a4",
      dark: "#000000",
      disabled: "#f9f9f9",
    },
    text: {
      main: "#404040",
      dark: "#000000",
      light: "#fff",
      green: "#22a958",
      disabled: "#13141f",
    },
    success: { main: "#00d170", dark: "#22a958" },
    border: { main: "#f4f5f7", light: "#cccc", card: "#f2f2f2" },
    boxShadow: {
      main: "rgba(26, 68, 116, 0.16)",
      light: "rgba(0, 0, 0, 0.16)",
    },
  },
  breakpoints: {
    values: {
      xs: "481px",
      sm: "768px",
      md: "992px",
      lg: "1201px",
      xl: "1441px",
    },
  },
  fontSizes: {
    values: {
      xs: "8px",
      sm: "10px",
      md: "11px",
      lg: "12px",
      xl: "16px",
    },
  },
  font: {
    name: "iransans",
    weight: "500",
  },
};

export default defaultTheme;

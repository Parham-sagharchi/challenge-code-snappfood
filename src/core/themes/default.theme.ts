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
      disabled: "#a3a3a3",
    },
    success: { main: "rgba(91, 168, 41, 0.08)", dark: "#5ba839" },
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
      xs: "10px",
      sm: "11px",
      md: "12px",
      lg: "13px",
      xl: "14px",
    },
  },
  font: {
    name: "iransans",
    weight: "500",
  },
};

export default defaultTheme;

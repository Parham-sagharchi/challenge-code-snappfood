import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const GlobalStyle = createGlobalStyle`
  * {
    direction: rtl;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    font-family: ${themeGet("fonts.primary")};
  }

  body {
    background-color: ${themeGet("palette.primary.disabled")};
  }
`;

export default GlobalStyle;

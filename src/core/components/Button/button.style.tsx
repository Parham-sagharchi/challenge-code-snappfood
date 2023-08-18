import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const ButtonStyle = styled.button`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet("palette.primary.light")};
  background-color: ${themeGet("palette.primary.main")};
  min-height: 48px;
  min-width: 48px;
  border-radius: 3px;
  font-family: inherit;
  font-size: ${themeGet("fontSizes.values.xl")}px;
  font-weight: ${themeGet("font.weight")};
  text-decoration: none;
  text-transform: capitalize;
  padding: 8px 15px;
  border: 0;
  outline: none;
`;

ButtonStyle.displayName = "ButtonStyle";

export default ButtonStyle;

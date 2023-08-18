import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  background-color: ${themeGet("palette.primary.disabled")};
  svg {
    width: 52px;
    height: 100px;
    display: inline-block;
  }
`;

export default LoaderWrapper;

import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Image from "next/image";

export const VendorCardWrapper = styled.div`
  position: relative;
  width: calc(100% - 32px);
  max-width: 567px;
  direction: rtl;
  border-radius: 6px;
  margin: 5px auto;
  background-color: ${themeGet("palette.primary.light")};
  border: solid 0.5px ${themeGet("palette.border.main")};
  box-shadow: 0 2px 12px 0 ${themeGet("palette.boxShadow.main")};
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: ${themeGet("fontSizes.values.xl")};
  font-weight: bold;
  margin: 0;
  line-height: 1.5;
  font-family: ${themeGet("font.name")};

  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    font-size: ${themeGet("fontSizes.values.md")};
  }
`;

export const RateStar = styled.div`
  background-color: ${themeGet("palette.success.main")};
  color: ${themeGet("palette.success.dark")};
  display: flex;
  align-items: center;
  text-align: left;
  font-size: ${themeGet("fontSizes.values.lg")};
  border-radius: 4px;
  padding: 2px 4px 2px 2px;
  align-items: center;

  svg {
    fill: ${themeGet("palette.success.dark")};
    width: 16px;
    height: 16px;
  }
`;

export const Description = styled.p`
  overflow: hidden;
  white-space: nowrap;
  font-size: ${themeGet("fontSizes.values.md")};
  margin-bottom: 16px;
  width: 100%;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    font-size: ${themeGet("fontSizes.values.sm")};
  }
`;

export const ContentWrapper = styled.div`
  padding: 16px;
`;

export const TitleRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const CardImageWrapper = styled.div`
  position: relative;
`;

export const CardBackgroundWrapper = styled.div`
  position: relative;
  height: 134px;

  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    height: 100px;
  }
`;

export const CardBackgroundImage = styled(Image)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: inherit;
  max-height: 100%;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  object-fit: cover;
`;

export const CardLogoWrapper = styled.div`
  position: absolute;
  bottom: -16px;
  right: 8px;
  border: 7px solid ${themeGet("palette.primary.light")};
  width: 84px;
  height: 84px;
  border-radius: 8px;
  background-color: ${themeGet("palette.primary.light")};
  box-shadow: 0 2px 6px 0 ${themeGet("palette.border.main")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    width: 60px;
    height: 60px;
  }
`;

export const CardLogo = styled(Image)`
  opacity: 1;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${themeGet("palette.border.main")};
  
  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    width: 60px;
    height: 60px;
  }
`;

export const TextOverlay = styled.div<{ isPro: boolean }>`
  position: absolute;
  top: 8px;
  background-color: ${themeGet("palette.primary.light")};
  color: ${({ isPro }) =>
    isPro ? themeGet("palette.primary.main") : themeGet("palette.text.green")};
  padding: 4px 8px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: ${themeGet("fontSizes.values.sm")};
`;

export const DeliveryWrapper = styled.div`
  font-size: ${themeGet("fontSizes.values.md")};
  display: flex;
  align-items: center;
  margin-top: 10px;
  @media (max-width: ${themeGet("breakpoints.values.xs")}) {
    font-size: ${themeGet("fontSizes.values.sm")};
  }
`;

export const DeliveryText = styled.span<{ isDisabled: boolean }>`
  font-size: ${themeGet("fontSizes.values.md")};
  margin-left: ${({ isDisabled }) => (isDisabled ? "4px" : "0px")};
  color: ${({ isDisabled }) =>
    isDisabled
      ? themeGet("palette.text.disabled")
      : themeGet("palette.text.main")};
`;

export const CommentAndRateWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentCount = styled.span`
  color: ${themeGet("palette.text.disabled")};
  font-size: ${themeGet("fontSizes.values.md")};
  margin-right: 10px;
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${themeGet("palette.success.dark")};
  margin-left: 5px;
`;

export default VendorCardWrapper;

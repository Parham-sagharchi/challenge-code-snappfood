import VendorCardWrapper, {
  Title,
  RateStar,
  Description,
  ContentWrapper,
  TitleRow,
  CardImageWrapper,
  CardBackgroundWrapper,
  CardBackgroundImage,
  CardLogoWrapper,
  CardLogo,
  TextOverlay,
  DeliveryText,
  DeliveryWrapper,
  CommentAndRateWrapper,
  CommentCount,
  StarIcon,
} from "@/core/components/VendorCard/vendorCard.style";
import { useTranslation } from "react-i18next";

const VendorCard = ({ mesureRef, vendorData }: any): any => {
  const { t } = useTranslation();

  const {
    backgroundImage,
    title,
    rate,
    description,
    logo,
    deliveryFee,
    is_pro,
    best_coupon,
    commentCount,
  }: any = vendorData;

  const imageWidth = 567;
  const imageHeight = 134;

  return (
    <VendorCardWrapper ref={mesureRef}>
      <CardImageWrapper>
        <CardBackgroundWrapper>
          <CardBackgroundImage
            src={backgroundImage}
            alt={title}
            width={imageWidth}
            height={imageHeight}
          />
        </CardBackgroundWrapper>
        {best_coupon && <TextOverlay isPro={is_pro}>{best_coupon}</TextOverlay>}
        <CardLogoWrapper>
          <CardLogo
            src={logo}
            alt={logo}
            width={imageWidth}
            height={imageHeight}
          />
        </CardLogoWrapper>
      </CardImageWrapper>
      <ContentWrapper>
        <TitleRow>
          {title && <Title>{title}</Title>}
          <CommentAndRateWrapper>
            {commentCount && <CommentCount>{`(${commentCount})`}</CommentCount>}
            &nbsp;
            {rate && (
              <RateStar>
                <span>{rate}</span>
                &nbsp;
                <StarIcon className="star-empty" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.36L22 9.27L17 13.14L18.18 20L12 16.73L5.82 20L7 13.14L2 9.27L8.91 8.36L12 2Z" />
                </StarIcon>
              </RateStar>
            )}
          </CommentAndRateWrapper>
        </TitleRow>
        {description && <Description>{description}</Description>}
        {deliveryFee && (
          <DeliveryWrapper>
            <DeliveryText isDisabled={true}>
              {t("Express Delivery")}
            </DeliveryText>
            <DeliveryText isDisabled={false}>
              {deliveryFee}&nbsp;{t("IR-Price")}
            </DeliveryText>
          </DeliveryWrapper>
        )}
      </ContentWrapper>
    </VendorCardWrapper>
  );
};

export default VendorCard;

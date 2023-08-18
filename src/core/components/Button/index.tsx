import { FC } from "react";
import ButtonStyle from "@/core/components/Button/button.style";
import { ButtonProps } from "@/types/core/Button";
import { useTranslation } from "react-i18next";

const Button: FC<ButtonProps> = ({
  type = "button",
  title,
  className,
  onClick,
  ...props
}) => {
  const { t } = useTranslation();
  const addAllClasses = ["reusecore__button"];

  if (className) addAllClasses.push(className);

  return (
    <ButtonStyle
      type={type}
      className={addAllClasses.join(" ")}
      onClick={onClick}
      {...props}
    >
      {title && <span className="btn-text">{t(title)}</span>}
    </ButtonStyle>
  );
};

export default Button;

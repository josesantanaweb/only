import React, { FC } from "react";
import TextStyled from "./Text.styled";
import { TextProps } from "./types";

const Text: FC<TextProps> = ({
  children,
  tag,
  type,
  className,
  uppercase = false,
  variant,
}) => (
  <TextStyled
    as={tag}
    className={className}
    type={type}
    uppercase={uppercase}
    variant={variant}
  >
    {children}
  </TextStyled>
);

export default Text;

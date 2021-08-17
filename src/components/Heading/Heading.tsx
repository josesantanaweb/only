import React, { FC } from "react";
import HeadingStyled from "./Heading.styled";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({
  children,
  tag,
  className,
  uppercase = false,
  variant,
}) => (
  <HeadingStyled
    as={tag}
    className={className}
    uppercase={uppercase}
    variant={variant}
  >
    {children}
  </HeadingStyled>
);

export default Heading;

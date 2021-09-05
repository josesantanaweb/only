import React, { FC } from "react";
import IconStyled from "./Icon.styled";
import { IconProps } from "./types";

const Icon: FC<IconProps> = ({ name, size, colorIcon }) => (
  <IconStyled
    className={`icon-${name}`}
    name={name}
    size={size}
    colorIcon={colorIcon}
  />
);

export default Icon;

import React, { FC } from "react";
import AvatarStyled from "./Avatar.styled";
import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({
  size = "medium",
  img,
  name = "Default",
}) => {
  const nameFirtsLetter = name?.substr(0, 1);
  return (
    <AvatarStyled size={size}>
      {img ? <img src={img} alt="avatar" /> : <h3>{nameFirtsLetter}</h3>}
    </AvatarStyled>
  );
};

export default Avatar;

import React, { FC } from "react";
import Heading from "../Heading";
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
      {img ? (
        <img src={img} alt="avatar" />
      ) : (
        <Heading tag={size === "large" ? "h3" : "h6"} variant="white">
          {nameFirtsLetter}
        </Heading>
      )}
    </AvatarStyled>
  );
};

export default Avatar;

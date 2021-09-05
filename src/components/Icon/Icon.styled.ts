import styled, { css } from "styled-components";
import { IconProps } from "./types";

const IconStyled = styled.i<IconProps>(({ theme, size, colorIcon }) => {
  const gradientMixin = css`
    background: linear-gradient(
      233deg,
      rgba(7, 172, 238, 1) 0%,
      rgba(77, 24, 226, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `;
  const colorMixin = css`
    color: ${colorIcon};
  `;
  const sizeMixin = () => {
    switch (size) {
      case "small":
        return css`
          font-size: ${theme.font.sizes.bodySmall};
        `;
      case "medium":
        return css`
          font-size: 24px;
        `;
      case "large":
        return css`
          font-size: ${theme.font.sizes.h3};
        `;
      default:
        return css`
          font-size: ${theme.font.sizes.bodyLarge};
        `;
    }
  };
  return css`
    display: inline-block;
    ${sizeMixin};
    ${colorIcon ? colorMixin : gradientMixin};
  `;
});
export default IconStyled;

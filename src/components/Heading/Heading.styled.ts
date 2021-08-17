import styled, { css } from "styled-components";
import { HeadingProps } from "./types";

export const HeadingStyled = styled.h6<HeadingProps>(
  ({ theme, uppercase, as, variant }) => {
    const uppercaseMixin = css`
      text-transform: ${uppercase ? "uppercase" : "capitalize"};
    `;

    const variantMixin = () => {
      switch (variant) {
        case "primary":
          return css`
            color: ${theme.colors.primary};
          `;
        case "secondary":
          return css`
            color: ${theme.colors.secondary};
          `;
        default:
          return css`
            color: ${theme.colors.tertiary};
          `;
      }
    };

    const sizeMixin = () => {
      switch (as) {
        case "h1":
          return css`
            font-size: 48px;
          `;
        case "h2":
          return css`
            font-size: 36px;
          `;
        case "h3":
          return css`
            font-size: 32px;
          `;
        case "h4":
          return css`
            font-size: 24px;
          `;
        case "h5":
          return css`
            font-size: 18px;
          `;
        case "h6":
          return css`
            font-size: 16px;
          `;
        default:
          return css`
            font-size: 16px;
          `;
      }
    };

    return css`
      display: inline-block;
      margin: 0;
      font-weight: 500;
      padding: 0;
      line-height: 1;
      ${sizeMixin};
      ${variantMixin};
      ${uppercaseMixin};
    `;
  }
);

export default HeadingStyled;

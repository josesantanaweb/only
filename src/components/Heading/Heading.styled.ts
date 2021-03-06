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
        case "white":
          return css`
            color: ${theme.colors.white};
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
            font-size: ${theme.font.sizes.h1};
            line-height: 72px;
            font-weight: ${theme.font.bold};
          `;
        case "h2":
          return css`
            font-size: ${theme.font.sizes.h2};
            line-height: 56px;
            font-weight: ${theme.font.bold};
          `;
        case "h3":
          return css`
            font-size: ${theme.font.sizes.h3};
            line-height: 40px;
            font-weight: ${theme.font.medium};
          `;
        case "h4":
          return css`
            font-size: ${theme.font.sizes.h4};
            line-height: 32px;
            font-weight: ${theme.font.regular};
          `;
        case "h5":
          return css`
            font-size: ${theme.font.sizes.h5};
            line-height: 32px;
            font-weight: ${theme.font.regular};
          `;
        case "h6":
          return css`
            font-size: ${theme.font.sizes.h6};
            line-height: 28px;
            font-weight: ${theme.font.regular};
          `;
        default:
          return css`
            font-size: 18px;
            line-height: 26px;
            font-weight: ${theme.font.regular};
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

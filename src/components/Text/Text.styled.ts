import styled, { css } from "styled-components";
import { TextProps } from "./types";

export const TextStyled = styled.p<TextProps>(
  ({ theme, uppercase, type, variant }) => {
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
        case "black":
          return css`
            color: ${theme.colors.black};
          `;
        case "white":
          return css`
            color: ${theme.colors.white};
          `;
        case "grey":
          return css`
            color: ${theme.colors.grey};
          `;
        default:
          return css`
            color: ${theme.colors.tertiary};
          `;
      }
    };

    const typeMixin = () => {
      switch (type) {
        case "body-small":
          return css`
            font-size: ${theme.font.sizes.bodySmall};
            line-height: 16px;
            font-weight: ${theme.font.regular};
          `;
        case "body-medium":
          return css`
            font-size: ${theme.font.sizes.bodyMedium};
            line-height: 20px;
            font-weight: ${theme.font.regular};
          `;
        case "body-large":
          return css`
            font-size: ${theme.font.sizes.bodyLarge};
            line-height: 27px;
            font-weight: ${theme.font.regular};
          `;
        case "button":
          return css`
            font-size: ${theme.font.sizes.button};
            line-height: 21px;
            font-weight: ${theme.font.regular};
          `;
        default:
          return css`
            font-size: 14px;
            line-height: 21px;
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
      ${typeMixin};
      ${variantMixin};
      ${uppercaseMixin};
    `;
  }
);

export default TextStyled;

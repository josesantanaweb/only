/* eslint-disable consistent-return */
import styled, { css } from "styled-components";
import { AvatarProps } from "./types";

const wrapperModifiers = {
  small: () => css`
    width: 45px;
    height: 45px;
  `,
  medium: () => css`
    width: 60px;
    height: 60px;
  `,
  large: () => css`
    width: 90px;
    height: 90px;
  `,
};

const AvatarStyled = styled.div<AvatarProps>(
  ({ theme, size }) => css`
    display: inline-block;
    border-radius: 100%;
    display: flex;
    background-color: ${theme.colors.primary};
    align-items: center;
    color: ${theme.colors.white};
    justify-content: center;
    overflow: hidden;
    ${!!size && wrapperModifiers[size]};
  `
);

export default AvatarStyled;

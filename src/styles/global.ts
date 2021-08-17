import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    /* Fonts */
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-Thin.otf") format("truetype");
      font-weight: 200;
      font-style: normal;
    }
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-Light.otf") format("truetype");
      font-weight: 300;
      font-style: normal;
    }
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-Regular.otf") format("truetype");
      font-weight: 400;
      font-style: normal;
    }
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-Medium.otf") format("truetype");
      font-weight: 500;
      font-style: normal;
    }
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-SemiBold.otf") format("truetype");
      font-weight: 600;
      font-style: normal;
    }
    @font-face {
      font-family: "Poppins";
      src: url("../../assets/fonts/Poppins-Bold.otf") format("truetype");
      font-weight: 700;
      font-style: normal;
    }

    /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role="list"],
    ol[role="list"] {
      list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 100%;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations and transitions for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
        scroll-behavior: auto;
      }
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    body {
      font-size: 16px;
      font-family: ${theme.font.family};
    }

    /* Spacing utilities */
    ${[5, 10, 15, 20].map(
      (size) => css`
        ${["top", "right", "bottom", "left"].map(
          (dir) => css`
            .m${dir[0]}-${size}{
              margin-${dir}: ${size}px;
            }
          `
        )}
      `
    )}
  `}
`;

export default GlobalStyles;

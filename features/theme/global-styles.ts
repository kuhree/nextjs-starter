import { css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { ThemedStyles } from './theme';

export const globalStyles: ThemedStyles = (theme) => css`
  ${emotionReset}

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    z-index: ${theme.zIndices['auto']};
    box-sizing: border-box;
  }

  html,
  body,
  main {
    max-width: 100vw;
    overflow-x: hidden;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

    *:focus {
      outline: ${theme.borders['2px']} ${theme.colors['info']};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semibold};
    letter-spacing: ${theme.letterSpacings.wider};
    line-height: ${theme.lineHeights['taller']};
    color: ${theme.colors.text};
  }

  h1 {
    font-size: ${theme.fontSizes['3xl']};

    &.display {
      font-size: ${theme.fontSizes['5xl']};
    }
  }

  h2 {
    font-size: ${theme.fontSizes['2xl']};
  }

  h3 {
    font-size: ${theme.fontSizes['xl']};
  }

  h4 {
    font-size: ${theme.fontSizes['lg']};
  }

  h5 {
    font-size: ${theme.fontSizes['md']};
  }

  h6 {
    font-size: ${theme.fontSizes['sm']};
  }

  p,
  div,
  span,
  a,
  ol,
  ul,
  li,
  blockquote,
  button,
  input,
  textarea,
  select,
  radio,
  checkbox,
  form,
  pre {
    line-height: ${theme.lineHeights.normal};
    font-weight: ${theme.fontWeights.normal};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
    font-size: ${theme.fontSizes.md};
    letter-spacing: ${theme.letterSpacings.normal};
  }

  pre {
    font-family: ${theme.fonts.mono};
  }

  a {
    text-decoration: underline;
    color: ${theme.colors.text};
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

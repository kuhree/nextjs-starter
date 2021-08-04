import { css } from '@emotion/core';
import * as React from 'react';
import { ComponentStyles } from '../features/theme';

export default function LandingPage() {
  return (
    <section css={styles.wrapper}>
      <h1 className="display">Big Title, Says Something</h1>

      <p className="tagline">
        Some tagline feature that makes you want to use this thing because It’s
        very important.
      </p>
    </section>
  );
}

const styles: ComponentStyles = {
  wrapper: (theme) => css`
    max-width: ${theme.space['2xl']};
    text-align: center;
    margin: 0 auto ${theme.space[8]};
    padding: ${theme.space[10]} 0;

    .tagline {
      font-weight: ${theme.fontWeights['light']};
      font-size: ${theme.fontSizes['2xl']};
      max-width: 50ch;
      margin: 0 auto ${theme.space[8]};
    }
  `,
};


import { AppProps } from 'next/app';
import * as React from 'react';
import { ThemeProvider } from '../features/theme';

/**
 * # App
 *
 * A wrapper for our client-side app.
 * Implemented with Next.JS, this is our custom verison.
 *
 * @note The last two points above would be the first place to start
 *  for state-management
 */
export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

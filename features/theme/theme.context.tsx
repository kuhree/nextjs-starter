import { Global } from '@emotion/core';
import { ThemeProvider as EmotionTheming } from 'emotion-theming';
import React from 'react';
import { globalStyles } from './global-styles';
import { ThemeTypes } from './theme';
import * as themes from './themes';
import { BaseTheme, DarkTheme, LightTheme } from './themes';

const lsPrefix = 'nextjs-starter-preferred-theme';

export const ThemeStateContext = React.createContext<{
  theme: DarkTheme | LightTheme;
  setTheme?: React.Dispatch<React.SetStateAction<BaseTheme>>;
}>({ theme: themes.dark });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState(themes.dark);

  React.useEffect(() => {
    function getDefaultTheme() {
      let defaultTheme: BaseTheme = themes.dark;

      // Check local storage
      const themeName = localStorage.getItem(lsPrefix);
      if (themeName && themeName in ThemeTypes) {
        defaultTheme = themes[themeName as ThemeTypes];
      }

      // Set the default theme
      setTheme(defaultTheme);
    }

    getDefaultTheme();
  }, []);

  return (
    <ThemeStateContext.Provider value={{ theme, setTheme }}>
      <Global styles={() => globalStyles(theme)} />
      <EmotionTheming theme={theme}>{children}</EmotionTheming>
    </ThemeStateContext.Provider>
  );
}

export function useTheme() {
  const { theme, setTheme } = React.useContext(ThemeStateContext);

  if (typeof theme === 'undefined' || typeof setTheme === 'undefined') {
    throw new Error('`useTheme` must be used within a `ThemeProvider`');
  }

  function changeTheme(type: ThemeTypes) {
    if (typeof window !== 'undefined' && !!setTheme) {
      localStorage.setItem(lsPrefix, JSON.stringify(type));
    }

    return setTheme
      ? setTheme(themes[type])
      : new Error(
          '`setTheme` is not defined. Make sure you are accessing `setTheme` within a `ThemeProvider` component.',
        );
  }

  function toggleLightAndDarkThemes() {
    const next =
      theme.name === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK;

    changeTheme(next);
  }

  function paginateThemes() {
    const themeList = Object.entries(ThemeTypes);

    const current = themeList.findIndex(([_, name]) => name === theme.name);

    const next = themeList[(current + 1) % themeList.length][1];
    const previous =
      themeList[(current - 1 + themeList.length) % themeList.length][1];

    return {
      current,
      next,
      previous,
    };
  }

  return { theme, changeTheme, paginateThemes, toggleLightAndDarkThemes };
}

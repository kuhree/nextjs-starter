import { SerializedStyles } from '@emotion/core';
import { BaseTheme } from './themes/base/index';

export enum ThemeTypes {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemedStyles = (theme: BaseTheme) => SerializedStyles;

export type ComponentStyles = {
  [key: string]: ThemedStyles | SerializedStyles;
};

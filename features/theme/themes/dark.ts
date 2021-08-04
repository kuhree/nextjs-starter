import { ThemeTypes } from '../theme';
import { base } from './base';
import { BaseTheme } from './base/index';

export type DarkTheme = BaseTheme & typeof dark;
export const dark: BaseTheme = {
  ...base,
  name: ThemeTypes.DARK,
  colors: {
    ...base.colors,
    text: '#FAFAFF',
    background: '#111111',
    primary: '#7928CA',
    secondary: '#79FFE1',
    highlight: '#FF0080',
    muted: '#888888',
    error: '#FF3333',
    success: '#37BE37',
    info: '#3291FF',
    warning: '#F7B955',
  },
};

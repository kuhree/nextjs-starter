import { ThemeTypes } from '../theme';
import { base } from './base';
import { BaseTheme } from './base/index';

export type LightTheme = BaseTheme & typeof light;

export const light: BaseTheme = {
  ...base,
  name: ThemeTypes.LIGHT,
  colors: {
    ...base.colors,
    background: 'hsl(275, 90%, 100%)',
    text: 'hsl(275, 0%, 10%)',
    primary: 'hsl(275, 100%, 80%)',
    secondary: 'hsl(275, 100%, 80%)',
    highlight: 'hsl(275, 20%, 40%)',
    muted: 'hsl(275, 20%, 0%)',
    error: '#ff0000',
    success: '#50e3c2',
    info: '#0070f3',
    warning: '#f5a623',
  },
};

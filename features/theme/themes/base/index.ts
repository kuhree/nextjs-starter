import { colors } from './colors';
import { typography } from './typography';
import { variants } from './variants';

export { colors, variants, typography };

export type BaseTheme = typeof base
export const base = {
  name: 'base',
  colors,
  ...variants,
  ...typography,
};

import { ColorObject } from '../color';

export type EnvieThemeFn = {
  elevation: (level: 1 | 2 | 3 | 4 | 5, color?: ColorObject) => string
  surface: (level: 1 | 2 | 3 | 4 | 5, color?: ColorObject) => string
  stateLayer: (level: 'hovered' | 'focused' | 'pressed', color?: ColorObject) => string
  opacity: (color: ColorObject, opacity: number) => string
};

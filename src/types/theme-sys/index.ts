import { Motion } from '../motion';
import { Scheme } from '../scheme';
import { Shape } from '../shape';
import { Typescale } from '../typescale';

export type ThemeSys = {
  typescale: Typescale
  motion: Motion
  shape: Shape
};

export type EnvieThemeSys = ThemeSys & {
  color: Scheme
};

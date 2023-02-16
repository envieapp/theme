import { ColorName, ColorObject } from '../color';

export type SchemeName = 'dark' | 'light';
export type Scheme = Record<ColorName, ColorObject>;

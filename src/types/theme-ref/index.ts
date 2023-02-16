import { ColorObject } from '../color';
import { Tone } from '../tone';

export type ThemeRef = {
  primary: Record<Tone, ColorObject>
  secondary: Record<Tone, ColorObject>
  tertiary: Record<Tone, ColorObject>
  neutral: Record<Tone, ColorObject>
  neutralVariant: Record<Tone, ColorObject>
  success: Record<Tone, ColorObject>
  warning: Record<Tone, ColorObject>
  error: Record<Tone, ColorObject>
  info: Record<Tone, ColorObject>
};

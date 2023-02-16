import { ColorObject } from '../../types';
import { hexFromArgb } from '../hex-from-argb';

export const colorFromArgb = (argb: number): ColorObject => {
  return {
    argb,
    hex: hexFromArgb(argb),
  };
};

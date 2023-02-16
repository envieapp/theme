export type ShapeName =
  | 'none'
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
  | 'full';

export type Shape = Record<ShapeName, string>;

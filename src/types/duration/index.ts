export type DurationName =
  | 'short1'
  | 'short2'
  | 'short3'
  | 'short4'
  | 'medium1'
  | 'medium2'
  | 'medium3'
  | 'medium4'
  | 'long1'
  | 'long2'
  | 'long3'
  | 'long4'
  | 'extraLong1'
  | 'extraLong2'
  | 'extraLong3'
  | 'extraLong4';

export type Duration = Record<DurationName, number>;

export type EasingName =
| 'linear'
| 'standard'
| 'standardAccelerate'
| 'standardDecelerate'
| 'emphasized'
| 'emphasizedAccelerate'
| 'emphasizedDecelerate'
| 'legacy'
| 'legacyAccelerate'
| 'legacyDecelerate';

export type Easing = Record<EasingName, string>;

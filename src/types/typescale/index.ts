import { TypescaleName } from '../typescale-name';
import { TypescaleSettings } from '../typescale-settings';
import { TypescaleSize } from '../typescale-size';

export type Typescale = Record<TypescaleName, Record<TypescaleSize, TypescaleSettings>>;

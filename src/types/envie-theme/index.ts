import { EnvieThemeFn } from '../envie-theme-fn';
import { SchemeName } from '../scheme';
import { ThemeRef } from '../theme-ref';
import { EnvieThemeSys, ThemeSys } from '../theme-sys';

export type BaseEnvieTheme = {
  source: string
  success: string
  warning: string
  error: string
  info: string
  ref: ThemeRef
  sys: ThemeSys
};

export type EnvieTheme = Omit<BaseEnvieTheme, 'sys'> & {
  scheme: SchemeName
  sys: EnvieThemeSys
  fn: EnvieThemeFn
};

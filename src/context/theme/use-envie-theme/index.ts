import { useEnvieThemeSelector } from '../use-envie-theme-selector';

export const useEnvieTheme = () => {
  const theme = useEnvieThemeSelector((s) => { return s; });
  return theme;
};

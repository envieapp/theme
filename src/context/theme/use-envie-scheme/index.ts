import { useEnvieThemeSelector } from '../use-envie-theme-selector';

export const useEnvieScheme = () => {
  const scheme = useEnvieThemeSelector((s) => { return s.scheme; });
  return scheme;
};

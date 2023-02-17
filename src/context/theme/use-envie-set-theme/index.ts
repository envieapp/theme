import { BaseEnvieTheme } from '../../../types';
import { useStore } from '../use-store';
import { wrapBaseTheme } from '../wrap-base-theme';

export const useEnvieSetTheme = () => {
  const store = useStore();

  const fn = (theme: BaseEnvieTheme) => {
    store.update(wrapBaseTheme(theme, store.getState().scheme));
  };

  return fn;
};

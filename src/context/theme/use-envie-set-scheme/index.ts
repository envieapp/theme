import { SchemeName } from '../../../types';
import { useStore } from '../use-store';
import { wrapBaseTheme } from '../wrap-base-theme';

export const useEnvieSetScheme = () => {
  const store = useStore();

  const fn = (scheme: SchemeName) => {
    store.update(wrapBaseTheme(store.getState(), scheme));
  };

  return fn;
};

import { useEnvieSetScheme } from '../use-envie-set-scheme';
import { useStore } from '../use-store';

export const useEnvieToggleScheme = () => {
  const store = useStore();
  const setScheme = useEnvieSetScheme();

  const fn = () => {
    if (store.getState().scheme === 'dark') {
      setScheme('light');
    } else {
      setScheme('dark');
    }
  };

  return fn;
};

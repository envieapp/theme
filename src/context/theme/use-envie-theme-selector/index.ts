import React from 'react';
import { EnvieTheme } from '../../../types';
import { useStore } from '../use-store';

export const useEnvieThemeSelector = <Result extends unknown>(
  selector: (state: EnvieTheme) => Result,
): Result => {
  const store = useStore();
  const [state, setState] = React.useState(() => { return selector(store.getState()); });
  const selectorRef = React.useRef(selector);
  const stateRef = React.useRef(state);

  React.useLayoutEffect(() => {
    selectorRef.current = selector;
    stateRef.current = state;
  });

  React.useEffect(() => {
    return store.subscribe(() => {
      const cachedSelectorState = selectorRef.current(store.getState());

      /* c8 ignore next 3 */
      if (stateRef.current === cachedSelectorState) {
        return;
      }

      setState(cachedSelectorState);
    });
  }, [store]);

  return state;
};

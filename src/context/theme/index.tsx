import { ContextStore } from '@envie/utilities';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { BaseEnvieTheme, EnvieTheme, SchemeName } from '../../types';
import { DEFAULT_THEME } from '../../lib/default-theme';
import { schemeFromRef } from '../../lib';
import { GlobalStyles } from '../../lib/global-styles';

const wrapBaseTheme = (baseTheme: BaseEnvieTheme, schemeName: SchemeName): EnvieTheme => {
  const envieTheme = baseTheme as unknown as EnvieTheme;

  envieTheme.scheme = schemeName;
  envieTheme.sys.color = schemeFromRef(schemeName, baseTheme.ref);
  envieTheme.fn = {
    surface(level, color = envieTheme.sys.color.shadow) {
      const r = color.argb >> 16 & 255;
      const g = color.argb >> 8 & 255;
      const b = color.argb & 255;
      const surface = envieTheme.sys.color.surface.hex;
      if (level === 1) {
        return `linear-gradient(0deg, rgba(${r},${g},${b},0.05), `
          + `rgba(${r},${g},${b},0.05)), ${surface}`;
      }
      if (level === 2) {
        return `linear-gradient(0deg, rgba(${r},${g},${b},0.08), `
          + `rgba(${r},${g},${b},0.08)), ${surface}`;
      }
      if (level === 3) {
        return `linear-gradient(0deg, rgba(${r},${g},${b},0.11), `
          + `rgba(${r},${g},${b},0.11)), ${surface}`;
      }
      if (level === 4) {
        return `linear-gradient(0deg, rgba(${r},${g},${b},0.12), `
          + `rgba(${r},${g},${b},0.12)), ${surface}`;
      }
      if (level === 5) {
        return `linear-gradient(0deg, rgba(${r},${g},${b},0.14), `
          + `rgba(${r},${g},${b},0.14)), ${surface}`;
      }
      return 'Invalid surface level';
    },
    elevation(level, color = envieTheme.sys.color.primary) {
      const r = color.argb >> 16 & 255;
      const g = color.argb >> 8 & 255;
      const b = color.argb & 255;
      const shadowR = envieTheme.sys.color.shadow.argb >> 16 & 255;
      const shadowG = envieTheme.sys.color.shadow.argb >> 8 & 255;
      const shadowB = envieTheme.sys.color.shadow.argb & 255;
      if (level === 1) {
        return `0 1px 3px 1px rgba(${r},${g},${b},0.15), `
            + `0 1px 2px rgba(${shadowR},${shadowG},${shadowB},0.3)`;
      }
      if (level === 2) {
        return `0 2px 6px 2px rgba(${r},${g},${b},0.15), `
            + `0 1px 2px rgba(${shadowR},${shadowG},${shadowB},0.3)`;
      }
      if (level === 3) {
        return `0 4px 8px 3px rgba(${r},${g},${b},0.15), `
            + `0 1px 3px rgba(${shadowR},${shadowG},${shadowB},0.3)`;
      }
      if (level === 4) {
        return `0 6px 10px 4px rgba(${r},${g},${b},0.15), `
            + `0 2px 3px rgba(${shadowR},${shadowG},${shadowB},0.3)`;
      }
      if (level === 5) {
        return `0 8px 12px 6px rgba(${r},${g},${b},0.15), `
            + `0 4px 4px rgba(${shadowR},${shadowG},${shadowB},0.3)`;
      }
      return 'Invalid elevation level';
    },
    stateLayer(level, color = envieTheme.sys.color.primary) {
      const r = color.argb >> 16 & 255;
      const g = color.argb >> 8 & 255;
      const b = color.argb & 255;
      if (level === 'hovered') {
        return `rgba(${r},${g},${b},0.08)`;
      }
      if (level === 'focused') {
        return `rgba(${r},${g},${b},0.12)`;
      }
      if (level === 'pressed') {
        return `rgba(${r},${g},${b},0.16)`;
      }
      return 'Invalid state layer level';
    },
  };

  return envieTheme;
};

export function createThemeContext() {
  const Context = React.createContext<ContextStore<EnvieTheme> | null>(null);

  const Provider = ({
    initialTheme = DEFAULT_THEME,
    initialSchemeName = 'light',
    withGlobalStyles,
    withEmotionProvider,
    children,
  }: {
    initialTheme?: BaseEnvieTheme;
    initialSchemeName?: SchemeName;
    withGlobalStyles?: boolean
    withEmotionProvider?: boolean
    children: React.ReactNode;
  }) => {
    const [theme, setTheme] = useState(wrapBaseTheme(initialTheme, initialSchemeName));
    const store = React.useMemo(() => {
      return new ContextStore(wrapBaseTheme(initialTheme, initialSchemeName));
    }, []);

    useEffect(() => {
      /* c8 ignore next 4 */
      if (!store) return;
      const unsubscribe = store.subscribe(() => {
        setTheme(store.getState());
      });
      return unsubscribe;
    }, [store]);

    const inner = (
      <>
        {withGlobalStyles && <GlobalStyles theme={theme} />}
        {children}
      </>
    );

    return (
      <Context.Provider value={store}>
        {withEmotionProvider ? (
          <ThemeProvider theme={theme}>
            {inner}
          </ThemeProvider>
        ) : inner}
      </Context.Provider>
    );
  };

  const useStore = () => {
    const store = React.useContext(Context);
    if (!store) {
      throw new Error('Can not use `useStore` outside of the `ThemeProvider`');
    }
    return store;
  };

  const useStateSelector = <Result extends unknown>(
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

  const useTheme = () => {
    const theme = useStateSelector((s) => { return s; });
    return theme;
  };

  const useScheme = () => {
    const scheme = useStateSelector((s) => { return s.scheme; });
    return scheme;
  };

  const useSetTheme = () => {
    const store = useStore();

    const fn = (theme: BaseEnvieTheme) => {
      store.update(wrapBaseTheme(theme, store.getState().scheme));
    };

    return fn;
  };

  const useSetScheme = () => {
    const store = useStore();

    const fn = (scheme: SchemeName) => {
      store.update(wrapBaseTheme(store.getState(), scheme));
    };

    return fn;
  };

  const useToggleScheme = () => {
    const store = useStore();
    const setScheme = useSetScheme();

    const fn = () => {
      if (store.getState().scheme === 'dark') {
        setScheme('light');
      } else {
        setScheme('dark');
      }
    };

    return fn;
  };

  /* c8 ignore next 10 */
  return {
    EnvieThemeProvider: Provider,
    useEnvieThemeSelector: useStateSelector,
    useEnvieTheme: useTheme,
    useEnvieScheme: useScheme,
    useEnvieSetTheme: useSetTheme,
    useEnvieSetScheme: useSetScheme,
    useEnvieToggleScheme: useToggleScheme,
  };
}

export const {
  EnvieThemeProvider,
  useEnvieThemeSelector,
  useEnvieTheme,
  useEnvieScheme,
  useEnvieSetTheme,
  useEnvieSetScheme,
  useEnvieToggleScheme,
} = createThemeContext();

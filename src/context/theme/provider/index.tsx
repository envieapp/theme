import React from 'react';
import { ContextStore } from '@envie/utilities';
import { ThemeProvider } from '@emotion/react';
import { BaseEnvieTheme, SchemeName } from '../../../types';
import { DEFAULT_THEME } from '../../../lib/default-theme';
import { wrapBaseTheme } from '../wrap-base-theme';
import { GlobalStyles } from '../../../lib';
import { Context } from '../context';
import { useEnvieTheme } from '../use-envie-theme';

const InnerProvider: React.FC<{
  withGlobalStyles?: boolean
  children: React.ReactNode;
}> = ({
  withGlobalStyles,
  children,
}) => {
  const theme = useEnvieTheme();

  return (
    <>
      {withGlobalStyles && <GlobalStyles theme={theme} />}
      {children}
    </>
  );
};

const EmotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useEnvieTheme();

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
};

export const EnvieThemeProvider: React.FC<{
  initialTheme?: BaseEnvieTheme;
  initialSchemeName?: SchemeName;
  withGlobalStyles?: boolean
  withEmotionProvider?: boolean
  children: React.ReactNode;
}> = ({
  initialTheme = DEFAULT_THEME,
  initialSchemeName = 'light',
  withEmotionProvider,
  ...rest
}) => {
  const store = React.useMemo(() => {
    return new ContextStore(wrapBaseTheme(initialTheme, initialSchemeName));
  }, []);

  return (
    <Context.Provider value={store}>
      {withEmotionProvider ? (
        <EmotionProvider>
          <InnerProvider {...rest} />
        </EmotionProvider>
      ) : <InnerProvider {...rest} />}
    </Context.Provider>
  );
};

import React from 'react';
import { Global } from '@emotion/react';
import { EnvieTheme } from '../../types';

export const GlobalStyles: React.FC<{ theme: EnvieTheme }> = ({ theme }) => {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },

        html: {
          colorScheme: theme.scheme,
        },

        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          background: theme.sys.color.background.hex,
          color: theme.sys.color.onBackground.hex,
          fontFamily: theme.sys.typescale.body.large.fontFamily.join(','),
          fontStyle: theme.sys.typescale.body.large.fontStyle,
          fontWeight: theme.sys.typescale.body.large.fontWeight,
          fontSize: theme.sys.typescale.body.large.fontSize,
          letterSpacing: theme.sys.typescale.body.large.letterSpacing,
          lineHeight: theme.sys.typescale.body.large.lineHeight,
        },
      }}
    />
  );
};

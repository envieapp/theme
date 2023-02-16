import { render, screen } from '@testing-library/react';
import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import {
  EnvieThemeProvider,
  useEnvieScheme,
  useEnvieSetScheme,
  useEnvieSetTheme,
  useEnvieTheme,
  useEnvieThemeSelector,
  useEnvieToggleScheme,
} from '.';
import { generateTheme } from '../../lib';

const otherTheme = generateTheme({
  source: '#000', success: '#000', warning: '#000', info: '#000', error: '#000',
});

describe('EnvieThemeProvider testing', () => {
  test('hook without provider', () => {
    try {
      const EmotionComponent = () => {
        const theme = useEnvieTheme();

        return (
          <div
            data-testid="component"
            data-color={theme.sys.color.primary.hex}
          />
        );
      };

      render(
        <EmotionComponent />,
      );

      expect(true).toBe('Hook is working?!');
    } catch (e) {
      expect((e as Error).message).toBe('Can not use `useStore` outside of the `ThemeProvider`');
    }
  });

  test('with initial scheme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-color={theme.sys.color.primary.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#cfbcff');
  });

  test('with initial theme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-color={theme.sys.color.primary.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider initialTheme={otherTheme}>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#984061');
  });

  test('useEnvieTheme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-color={theme.sys.color.primary.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#6750a4');
  });

  test('withEmotionProvider', () => {
    const EmotionComponent = () => {
      const theme = useTheme();

      return (
        <div
          data-testid="component"
          data-color={theme.sys.color.primary.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider withEmotionProvider>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#6750a4');
  });

  test('withGlobalStyles', () => {
    const EmotionComponent = () => {
      return (
        <body
          data-testid="component"
        />
      );
    };

    render(
      <EnvieThemeProvider withEmotionProvider withGlobalStyles>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    const computed = getComputedStyle(screen.getByTestId('component'));

    screen.debug();

    expect(computed.boxSizing).toBe('border-box');
    expect(computed.margin).toBe('0px');
    expect(computed.padding).toBe('0px');
    expect(computed.color).toBe('rgb(28, 27, 30)');
    expect(computed.background).toBe('rgb(255, 251, 255)');
  });

  test('useEnvieThemeSelector', () => {
    const EmotionComponent = () => {
      const color = useEnvieThemeSelector((s) => { return s.sys.color.primary; });

      return (
        <div
          data-testid="component"
          data-color={color.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#6750a4');
  });

  test('useEnvieScheme', () => {
    const EmotionComponent = () => {
      const scheme = useEnvieScheme();

      return (
        <div
          data-testid="component"
          data-scheme={scheme}
        />
      );
    };

    render(
      <EnvieThemeProvider>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.scheme).toBe('light');
  });

  test('useEnvieSetTheme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();
      const setTheme = useEnvieSetTheme();

      useEffect(() => {
        setTheme(otherTheme);
      }, []);

      return (
        <div
          data-testid="component"
          data-color={theme.sys.color.primary.hex}
        />
      );
    };

    render(
      <EnvieThemeProvider>
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.color).toBe('#984061');
  });

  test('useEnvieSetScheme light', () => {
    const EmotionComponent = () => {
      const scheme = useEnvieScheme();
      const setScheme = useEnvieSetScheme();

      useEffect(() => {
        setScheme('light');
      }, []);

      return (
        <div
          data-testid="component"
          data-scheme={scheme}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.scheme).toBe('light');
  });

  test('useEnvieSetScheme dark', () => {
    const EmotionComponent = () => {
      const scheme = useEnvieScheme();
      const setScheme = useEnvieSetScheme();

      useEffect(() => {
        setScheme('dark');
      }, []);

      return (
        <div
          data-testid="component"
          data-scheme={scheme}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="light">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.scheme).toBe('dark');
  });

  test('useEnvieToggleScheme from light', () => {
    const EmotionComponent = () => {
      const scheme = useEnvieScheme();
      const toggleScheme = useEnvieToggleScheme();

      useEffect(() => {
        toggleScheme();
      }, []);

      return (
        <div
          data-testid="component"
          data-scheme={scheme}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="light">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.scheme).toBe('dark');
  });

  test('useEnvieToggleScheme from dark', () => {
    const EmotionComponent = () => {
      const scheme = useEnvieScheme();
      const toggleScheme = useEnvieToggleScheme();

      useEffect(() => {
        toggleScheme();
      }, []);

      return (
        <div
          data-testid="component"
          data-scheme={scheme}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.scheme).toBe('light');
  });

  test('surface function in theme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-surface1={theme.fn.surface(1)}
          data-surface2={theme.fn.surface(2)}
          data-surface3={theme.fn.surface(3)}
          data-surface4={theme.fn.surface(4)}
          data-surface5={theme.fn.surface(5)}
          data-invalid={theme.fn.surface('' as any)}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.surface1)
      .toBe('linear-gradient(0deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05)), #1c1b1e');
    expect(screen.getByTestId('component').dataset.surface2)
      .toBe('linear-gradient(0deg, rgba(0,0,0,0.08), rgba(0,0,0,0.08)), #1c1b1e');
    expect(screen.getByTestId('component').dataset.surface3)
      .toBe('linear-gradient(0deg, rgba(0,0,0,0.11), rgba(0,0,0,0.11)), #1c1b1e');
    expect(screen.getByTestId('component').dataset.surface4)
      .toBe('linear-gradient(0deg, rgba(0,0,0,0.12), rgba(0,0,0,0.12)), #1c1b1e');
    expect(screen.getByTestId('component').dataset.surface5)
      .toBe('linear-gradient(0deg, rgba(0,0,0,0.14), rgba(0,0,0,0.14)), #1c1b1e');
    expect(screen.getByTestId('component').dataset.invalid).toBe('Invalid surface level');
  });

  test('elevation function in theme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-elevation1={theme.fn.elevation(1)}
          data-elevation2={theme.fn.elevation(2)}
          data-elevation3={theme.fn.elevation(3)}
          data-elevation4={theme.fn.elevation(4)}
          data-elevation5={theme.fn.elevation(5)}
          data-invalid={theme.fn.elevation('' as any)}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.elevation1)
      .toBe('0 1px 3px 1px rgba(207,188,255,0.15), 0 1px 2px rgba(0,0,0,0.3)');
    expect(screen.getByTestId('component').dataset.elevation2)
      .toBe('0 2px 6px 2px rgba(207,188,255,0.15), 0 1px 2px rgba(0,0,0,0.3)');
    expect(screen.getByTestId('component').dataset.elevation3)
      .toBe('0 4px 8px 3px rgba(207,188,255,0.15), 0 1px 3px rgba(0,0,0,0.3)');
    expect(screen.getByTestId('component').dataset.elevation4)
      .toBe('0 6px 10px 4px rgba(207,188,255,0.15), 0 2px 3px rgba(0,0,0,0.3)');
    expect(screen.getByTestId('component').dataset.elevation5)
      .toBe('0 8px 12px 6px rgba(207,188,255,0.15), 0 4px 4px rgba(0,0,0,0.3)');
    expect(screen.getByTestId('component').dataset.invalid).toBe('Invalid elevation level');
  });

  test('state layer function in theme', () => {
    const EmotionComponent = () => {
      const theme = useEnvieTheme();

      return (
        <div
          data-testid="component"
          data-state-layer-hovered={theme.fn.stateLayer('hovered')}
          data-state-layer-focused={theme.fn.stateLayer('focused')}
          data-state-layer-pressed={theme.fn.stateLayer('pressed')}
          data-invalid={theme.fn.stateLayer('' as any)}
        />
      );
    };

    render(
      <EnvieThemeProvider initialSchemeName="dark">
        <EmotionComponent />
      </EnvieThemeProvider>,
    );

    expect(screen.getByTestId('component').dataset.stateLayerHovered)
      .toBe('rgba(207,188,255,0.08)');
    expect(screen.getByTestId('component').dataset.stateLayerFocused)
      .toBe('rgba(207,188,255,0.12)');
    expect(screen.getByTestId('component').dataset.stateLayerPressed)
      .toBe('rgba(207,188,255,0.16)');
    expect(screen.getByTestId('component').dataset.invalid).toBe('Invalid state layer level');
  });
});

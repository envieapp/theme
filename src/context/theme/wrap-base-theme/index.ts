import { schemeFromRef } from '../../../lib';
import { BaseEnvieTheme, EnvieTheme, SchemeName } from '../../../types';

export const wrapBaseTheme = (baseTheme: BaseEnvieTheme, schemeName: SchemeName): EnvieTheme => {
  const envieTheme = baseTheme as unknown as EnvieTheme;

  envieTheme.scheme = schemeName;
  envieTheme.sys.color = schemeFromRef(schemeName, baseTheme.ref);
  envieTheme.fn = {
    surface(level, color = envieTheme.sys.color.shadow) {
      const surface = envieTheme.sys.color.surface.hex;
      if (level === 1) {
        const c = this.opacity(color, 0.05);
        return `linear-gradient(0deg, ${c}, ${c}), ${surface}`;
      }
      if (level === 2) {
        const c = this.opacity(color, 0.08);
        return `linear-gradient(0deg, ${c}, ${c}), ${surface}`;
      }
      if (level === 3) {
        const c = this.opacity(color, 0.11);
        return `linear-gradient(0deg, ${c}, ${c}), ${surface}`;
      }
      if (level === 4) {
        const c = this.opacity(color, 0.12);
        return `linear-gradient(0deg, ${c}, ${c}), ${surface}`;
      }
      if (level === 5) {
        const c = this.opacity(color, 0.14);
        return `linear-gradient(0deg, ${c}, ${c}), ${surface}`;
      }
      return 'Invalid surface level';
    },
    elevation(level, color = envieTheme.sys.color.shadow) {
      const crgba = this.opacity(color, 0.15);
      const srgba = this.opacity(envieTheme.sys.color.shadow, 0.3);
      if (level === 1) {
        return `0 1px 3px 1px ${crgba}, 0 1px 2px ${srgba}`;
      }
      if (level === 2) {
        return `0 2px 6px 2px ${crgba}, 0 1px 2px ${srgba}`;
      }
      if (level === 3) {
        return `0 4px 8px 3px ${crgba}, 0 1px 3px ${srgba}`;
      }
      if (level === 4) {
        return `0 6px 10px 4px ${crgba}, 0 2px 3px ${srgba}`;
      }
      if (level === 5) {
        return `0 8px 12px 6px ${crgba}, 0 4px 4px ${srgba}`;
      }
      return 'Invalid elevation level';
    },
    stateLayer(level, color = envieTheme.sys.color.primary) {
      if (level === 'hovered') {
        return this.opacity(color, 0.08);
      }
      if (level === 'focused') {
        return this.opacity(color, 0.12);
      }
      if (level === 'pressed') {
        return this.opacity(color, 0.16);
      }
      return 'Invalid state layer level';
    },
    opacity(color, opacity) {
      const r = color.argb >> 16 & 255;
      const g = color.argb >> 8 & 255;
      const b = color.argb & 255;
      return `rgba(${r},${g},${b},${opacity})`;
    },
  };

  return envieTheme;
};

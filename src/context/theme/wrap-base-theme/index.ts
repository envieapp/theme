import { schemeFromRef } from '../../../lib';
import { BaseEnvieTheme, EnvieTheme, SchemeName } from '../../../types';

export const wrapBaseTheme = (baseTheme: BaseEnvieTheme, schemeName: SchemeName): EnvieTheme => {
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

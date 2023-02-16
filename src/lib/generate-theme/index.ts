import {
  CorePalette, TonalPalette, argbFromHex, customColor,
} from '@sinoui/material-color-utilities';
import { BaseEnvieTheme, ThemeSys } from '../../types';
import { DEFAULT_SYS } from '../default-sys';
import { colorFromArgb } from '../color-from-argb';

export type GenerateThemeOptions = {
  source: string,
  success: string,
  warning: string
  error: string,
  info: string
  sys?: ThemeSys
};

export const generateTheme = ({
  source,
  success,
  warning,
  error,
  info,
  sys = DEFAULT_SYS,
}: GenerateThemeOptions): BaseEnvieTheme => {
  const sourceArgb = argbFromHex(source);
  const corePalette = CorePalette.of(sourceArgb);
  const primaryTonalPalette = corePalette.a1;
  const secondaryTonalPalette = corePalette.a2;
  const tertiaryTonalPalette = corePalette.a3;
  const neutralTonalPalette = corePalette.n1;
  const neutralVariantTonalPalette = corePalette.n2;
  const successTonalPalette = TonalPalette.fromInt(customColor(sourceArgb, {
    value: argbFromHex(success),
    name: 'success',
    blend: true,
  }).value);
  const warningTonalPalette = TonalPalette.fromInt(customColor(sourceArgb, {
    value: argbFromHex(warning),
    name: 'success',
    blend: true,
  }).value);
  const errorTonalPalette = TonalPalette.fromInt(customColor(sourceArgb, {
    value: argbFromHex(error),
    name: 'success',
    blend: true,
  }).value);
  const infoTonalPalette = TonalPalette.fromInt(customColor(sourceArgb, {
    value: argbFromHex(info),
    name: 'success',
    blend: true,
  }).value);

  return {
    source,
    success,
    warning,
    error,
    info,
    ref: {
      primary: {
        0: colorFromArgb(primaryTonalPalette.tone(0)),
        10: colorFromArgb(primaryTonalPalette.tone(10)),
        20: colorFromArgb(primaryTonalPalette.tone(20)),
        30: colorFromArgb(primaryTonalPalette.tone(30)),
        40: colorFromArgb(primaryTonalPalette.tone(40)),
        50: colorFromArgb(primaryTonalPalette.tone(50)),
        60: colorFromArgb(primaryTonalPalette.tone(60)),
        70: colorFromArgb(primaryTonalPalette.tone(70)),
        80: colorFromArgb(primaryTonalPalette.tone(80)),
        90: colorFromArgb(primaryTonalPalette.tone(90)),
        95: colorFromArgb(primaryTonalPalette.tone(95)),
        99: colorFromArgb(primaryTonalPalette.tone(99)),
        100: colorFromArgb(primaryTonalPalette.tone(100)),
      },
      secondary: {
        0: colorFromArgb(secondaryTonalPalette.tone(0)),
        10: colorFromArgb(secondaryTonalPalette.tone(10)),
        20: colorFromArgb(secondaryTonalPalette.tone(20)),
        30: colorFromArgb(secondaryTonalPalette.tone(30)),
        40: colorFromArgb(secondaryTonalPalette.tone(40)),
        50: colorFromArgb(secondaryTonalPalette.tone(50)),
        60: colorFromArgb(secondaryTonalPalette.tone(60)),
        70: colorFromArgb(secondaryTonalPalette.tone(70)),
        80: colorFromArgb(secondaryTonalPalette.tone(80)),
        90: colorFromArgb(secondaryTonalPalette.tone(90)),
        95: colorFromArgb(secondaryTonalPalette.tone(95)),
        99: colorFromArgb(secondaryTonalPalette.tone(99)),
        100: colorFromArgb(secondaryTonalPalette.tone(100)),
      },
      tertiary: {
        0: colorFromArgb(tertiaryTonalPalette.tone(0)),
        10: colorFromArgb(tertiaryTonalPalette.tone(10)),
        20: colorFromArgb(tertiaryTonalPalette.tone(20)),
        30: colorFromArgb(tertiaryTonalPalette.tone(30)),
        40: colorFromArgb(tertiaryTonalPalette.tone(40)),
        50: colorFromArgb(tertiaryTonalPalette.tone(50)),
        60: colorFromArgb(tertiaryTonalPalette.tone(60)),
        70: colorFromArgb(tertiaryTonalPalette.tone(70)),
        80: colorFromArgb(tertiaryTonalPalette.tone(80)),
        90: colorFromArgb(tertiaryTonalPalette.tone(90)),
        95: colorFromArgb(tertiaryTonalPalette.tone(95)),
        99: colorFromArgb(tertiaryTonalPalette.tone(99)),
        100: colorFromArgb(tertiaryTonalPalette.tone(100)),
      },
      success: {
        0: colorFromArgb(successTonalPalette.tone(0)),
        10: colorFromArgb(successTonalPalette.tone(10)),
        20: colorFromArgb(successTonalPalette.tone(20)),
        30: colorFromArgb(successTonalPalette.tone(30)),
        40: colorFromArgb(successTonalPalette.tone(40)),
        50: colorFromArgb(successTonalPalette.tone(50)),
        60: colorFromArgb(successTonalPalette.tone(60)),
        70: colorFromArgb(successTonalPalette.tone(70)),
        80: colorFromArgb(successTonalPalette.tone(80)),
        90: colorFromArgb(successTonalPalette.tone(90)),
        95: colorFromArgb(successTonalPalette.tone(95)),
        99: colorFromArgb(successTonalPalette.tone(99)),
        100: colorFromArgb(successTonalPalette.tone(100)),
      },
      warning: {
        0: colorFromArgb(warningTonalPalette.tone(0)),
        10: colorFromArgb(warningTonalPalette.tone(10)),
        20: colorFromArgb(warningTonalPalette.tone(20)),
        30: colorFromArgb(warningTonalPalette.tone(30)),
        40: colorFromArgb(warningTonalPalette.tone(40)),
        50: colorFromArgb(warningTonalPalette.tone(50)),
        60: colorFromArgb(warningTonalPalette.tone(60)),
        70: colorFromArgb(warningTonalPalette.tone(70)),
        80: colorFromArgb(warningTonalPalette.tone(80)),
        90: colorFromArgb(warningTonalPalette.tone(90)),
        95: colorFromArgb(warningTonalPalette.tone(95)),
        99: colorFromArgb(warningTonalPalette.tone(99)),
        100: colorFromArgb(warningTonalPalette.tone(100)),
      },
      error: {
        0: colorFromArgb(errorTonalPalette.tone(0)),
        10: colorFromArgb(errorTonalPalette.tone(10)),
        20: colorFromArgb(errorTonalPalette.tone(20)),
        30: colorFromArgb(errorTonalPalette.tone(30)),
        40: colorFromArgb(errorTonalPalette.tone(40)),
        50: colorFromArgb(errorTonalPalette.tone(50)),
        60: colorFromArgb(errorTonalPalette.tone(60)),
        70: colorFromArgb(errorTonalPalette.tone(70)),
        80: colorFromArgb(errorTonalPalette.tone(80)),
        90: colorFromArgb(errorTonalPalette.tone(90)),
        95: colorFromArgb(errorTonalPalette.tone(95)),
        99: colorFromArgb(errorTonalPalette.tone(99)),
        100: colorFromArgb(errorTonalPalette.tone(100)),
      },
      info: {
        0: colorFromArgb(infoTonalPalette.tone(0)),
        10: colorFromArgb(infoTonalPalette.tone(10)),
        20: colorFromArgb(infoTonalPalette.tone(20)),
        30: colorFromArgb(infoTonalPalette.tone(30)),
        40: colorFromArgb(infoTonalPalette.tone(40)),
        50: colorFromArgb(infoTonalPalette.tone(50)),
        60: colorFromArgb(infoTonalPalette.tone(60)),
        70: colorFromArgb(infoTonalPalette.tone(70)),
        80: colorFromArgb(infoTonalPalette.tone(80)),
        90: colorFromArgb(infoTonalPalette.tone(90)),
        95: colorFromArgb(infoTonalPalette.tone(95)),
        99: colorFromArgb(infoTonalPalette.tone(99)),
        100: colorFromArgb(infoTonalPalette.tone(100)),
      },
      neutral: {
        0: colorFromArgb(neutralTonalPalette.tone(0)),
        10: colorFromArgb(neutralTonalPalette.tone(10)),
        20: colorFromArgb(neutralTonalPalette.tone(20)),
        30: colorFromArgb(neutralTonalPalette.tone(30)),
        40: colorFromArgb(neutralTonalPalette.tone(40)),
        50: colorFromArgb(neutralTonalPalette.tone(50)),
        60: colorFromArgb(neutralTonalPalette.tone(60)),
        70: colorFromArgb(neutralTonalPalette.tone(70)),
        80: colorFromArgb(neutralTonalPalette.tone(80)),
        90: colorFromArgb(neutralTonalPalette.tone(90)),
        95: colorFromArgb(neutralTonalPalette.tone(95)),
        99: colorFromArgb(neutralTonalPalette.tone(99)),
        100: colorFromArgb(neutralTonalPalette.tone(100)),
      },
      neutralVariant: {
        0: colorFromArgb(neutralVariantTonalPalette.tone(0)),
        10: colorFromArgb(neutralVariantTonalPalette.tone(10)),
        20: colorFromArgb(neutralVariantTonalPalette.tone(20)),
        30: colorFromArgb(neutralVariantTonalPalette.tone(30)),
        40: colorFromArgb(neutralVariantTonalPalette.tone(40)),
        50: colorFromArgb(neutralVariantTonalPalette.tone(50)),
        60: colorFromArgb(neutralVariantTonalPalette.tone(60)),
        70: colorFromArgb(neutralVariantTonalPalette.tone(70)),
        80: colorFromArgb(neutralVariantTonalPalette.tone(80)),
        90: colorFromArgb(neutralVariantTonalPalette.tone(90)),
        95: colorFromArgb(neutralVariantTonalPalette.tone(95)),
        99: colorFromArgb(neutralVariantTonalPalette.tone(99)),
        100: colorFromArgb(neutralVariantTonalPalette.tone(100)),
      },
    },
    sys,
  };
};

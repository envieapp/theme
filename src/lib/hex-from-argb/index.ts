export const hexFromArgb = (argb: number) => {
  const red = argb >> 16 & 255;
  const green = argb >> 8 & 255;
  const blue = argb & 255;
  const alpha = argb >> 24 & 255;
  const redString = red.toString(16).padStart(2, '0');
  const greenString = green.toString(16).padStart(2, '0');
  const blueString = blue.toString(16).padStart(2, '0');
  const alphaString = alpha.toString(16).padStart(2, '0');

  if (alpha === 255) {
    return `#${redString}${greenString}${blueString}`;
  }
  return `#${redString}${greenString}${blueString}${alphaString}`;
};

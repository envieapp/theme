import { colorFromArgb } from '.';

describe('colorFromArgb testing', () => {
  test('black', () => {
    const result = colorFromArgb(4278190080);

    expect(result.hex).toBe('#000000');
    expect(result.argb).toBe(4278190080);
  });

  test('white', () => {
    const result = colorFromArgb(4294967295);

    expect(result.hex).toBe('#ffffff');
    expect(result.argb).toBe(4294967295);
  });

  test('red with 0 alpha', () => {
    const result = colorFromArgb(16711680);

    expect(result.hex).toBe('#ff000000');
    expect(result.argb).toBe(16711680);
  });
});

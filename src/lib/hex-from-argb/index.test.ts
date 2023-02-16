import { hexFromArgb } from '.';

describe('hexFromArgb testing', () => {
  test('black', () => {
    const result = hexFromArgb(4278190080);

    expect(result).toBe('#000000');
  });

  test('white', () => {
    const result = hexFromArgb(4294967295);

    expect(result).toBe('#ffffff');
  });

  test('red with 0 alpha', () => {
    const result = hexFromArgb(16711680);

    expect(result).toBe('#ff000000');
  });
});

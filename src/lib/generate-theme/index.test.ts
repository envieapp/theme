import { generateTheme } from '.';

describe('generateTheme testing', () => {
  test('generate', () => {
    const theme = generateTheme({
      source: '#B69DF8',
      success: '#a6f89d',
      warning: '#f8ec9d',
      error: '#f89d9d',
      info: '#9dc1f8',
    });

    expect(theme).toBeTruthy();
    const keys = Object.keys(theme);
    expect(keys).toContain('source');
    expect(keys).toContain('success');
    expect(keys).toContain('warning');
    expect(keys).toContain('error');
    expect(keys).toContain('info');
    expect(keys).toContain('ref');
    expect(keys).toContain('sys');
  });
});

import { afterEach, describe, expect, it, vi } from 'vitest';

async function loadWithBase(base: string) {
  vi.stubEnv('BASE_URL', base);
  vi.resetModules();
  return import('./url');
}

afterEach(() => {
  vi.resetModules();
});

describe('at the site root', () => {
  it('leaves root-relative paths alone', async () => {
    const { withBase } = await loadWithBase('/');
    expect(withBase('/contact')).toBe('/contact');
  });

  it('returns pathnames unchanged', async () => {
    const { withoutBase } = await loadWithBase('/');
    expect(withoutBase('/about')).toBe('/about');
  });
});

describe('under a staging base path', () => {
  it('prefixes root-relative paths', async () => {
    const { withBase } = await loadWithBase('/pr-7/');
    expect(withBase('/contact')).toBe('/pr-7/contact');
    expect(withBase('/images/headshot.webp')).toBe(
      '/pr-7/images/headshot.webp'
    );
  });

  it('leaves relative, absolute, and protocol-relative URLs alone', async () => {
    const { withBase } = await loadWithBase('/pr-7/');
    expect(withBase('#work')).toBe('#work');
    expect(withBase('mailto:hello@mainstreetlogic.com')).toBe(
      'mailto:hello@mainstreetlogic.com'
    );
    expect(withBase('https://supplycheckout.com/demo')).toBe(
      'https://supplycheckout.com/demo'
    );
    expect(withBase('//cdn.example.com/x.js')).toBe('//cdn.example.com/x.js');
  });

  it('strips the base from pathnames', async () => {
    const { withoutBase } = await loadWithBase('/pr-7/');
    expect(withoutBase('/pr-7/services')).toBe('/services');
  });

  it('maps the bare base to the root', async () => {
    const { withoutBase } = await loadWithBase('/pr-7');
    expect(withoutBase('/pr-7')).toBe('/');
  });

  it('leaves pathnames outside the base alone', async () => {
    const { withoutBase } = await loadWithBase('/pr-7/');
    expect(withoutBase('/about')).toBe('/about');
  });
});

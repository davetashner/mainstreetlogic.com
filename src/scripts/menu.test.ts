import { beforeEach, describe, expect, it } from 'vitest';
import { initMenu } from './menu';

describe('initMenu', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="menu-button" aria-expanded="false">Menu</button>
      <nav id="mobile-menu" hidden></nav>`;
  });

  it('opens and closes the mobile menu', () => {
    initMenu();
    const button = document.getElementById('menu-button')!;
    const menu = document.getElementById('mobile-menu')!;

    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(menu.hidden).toBe(false);

    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(menu.hidden).toBe(true);
  });

  it('still toggles the button when the menu is missing', () => {
    document.getElementById('mobile-menu')!.remove();
    initMenu();
    const button = document.getElementById('menu-button')!;
    button.click();
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('does nothing when the button is missing', () => {
    document.body.innerHTML = '';
    expect(() => initMenu()).not.toThrow();
  });
});

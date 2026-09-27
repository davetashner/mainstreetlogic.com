import { beforeEach, describe, expect, it } from 'vitest';
import { initThemeToggle } from './theme-toggle';

describe('initThemeToggle', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
    document.body.innerHTML = '<button id="theme-toggle"></button>';
    localStorage.clear();
  });

  const toggle = () => document.getElementById('theme-toggle')!;

  it('labels the button for the current theme on load', () => {
    initThemeToggle();
    expect(toggle().getAttribute('aria-label')).toBe('Switch to dark mode');
  });

  it('labels the button for light mode when the page starts dark', () => {
    document.documentElement.classList.add('dark');
    initThemeToggle();
    expect(toggle().getAttribute('aria-label')).toBe('Switch to light mode');
  });

  it('switches themes and remembers the choice', () => {
    initThemeToggle();

    toggle().click();
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(toggle().getAttribute('aria-label')).toBe('Switch to light mode');

    toggle().click();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(toggle().getAttribute('aria-label')).toBe('Switch to dark mode');
  });

  it('does nothing when the button is missing', () => {
    document.body.innerHTML = '';
    expect(() => initThemeToggle()).not.toThrow();
  });
});

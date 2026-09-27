/** Wire the light/dark toggle and remember the choice in localStorage. */
export function initThemeToggle(
  doc: Document = document,
  storage: Storage = localStorage
): void {
  const toggle = doc.getElementById('theme-toggle');

  function sync() {
    const dark = doc.documentElement.classList.contains('dark');
    toggle?.setAttribute(
      'aria-label',
      dark ? 'Switch to light mode' : 'Switch to dark mode'
    );
  }

  sync();
  toggle?.addEventListener('click', () => {
    const dark = doc.documentElement.classList.toggle('dark');
    storage.setItem('theme', dark ? 'dark' : 'light');
    sync();
  });
}

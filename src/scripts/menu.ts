/** Toggle the mobile nav open and closed from the header menu button. */
export function initMenu(doc: Document = document): void {
  const button = doc.getElementById('menu-button');
  const menu = doc.getElementById('mobile-menu');

  button?.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!open));
    if (menu) menu.hidden = open;
  });
}

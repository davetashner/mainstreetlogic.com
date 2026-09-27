import { beforeEach, describe, expect, it, vi } from 'vitest';
import { initChecklist } from './checklist';

function render(boxes = 4) {
  document.body.innerHTML = `
    <form id="checklist">
      ${'<input type="checkbox" />'.repeat(boxes)}
    </form>
    <p id="score-live" hidden><span id="score-count">0</span> of <span id="score-total"></span></p>
    <ul class="bands">
      <li data-min="0" data-max="1">Low</li>
      <li data-min="2" data-max="3">Medium</li>
      <li data-min="4" data-max="4">High</li>
    </ul>
    <button id="print-button">Print</button>`;
}

const boxes = () =>
  Array.from(document.querySelectorAll<HTMLInputElement>('#checklist input'));
const active = () =>
  Array.from(document.querySelectorAll('.bands li[data-active]')).map(
    (li) => li.textContent
  );

function check(i: number) {
  boxes()[i].checked = true;
  document
    .getElementById('checklist')!
    .dispatchEvent(new Event('change', { bubbles: true }));
}

describe('initChecklist', () => {
  beforeEach(() => render());

  it('shows how many items there are', () => {
    initChecklist();
    expect(document.getElementById('score-total')!.textContent).toBe('4');
  });

  it('keeps a live score and highlights the matching band', () => {
    initChecklist();
    const live = document.getElementById('score-live')!;
    expect(live.hidden).toBe(true);

    check(0);
    expect(live.hidden).toBe(false);
    expect(document.getElementById('score-count')!.textContent).toBe('1');
    expect(active()).toEqual(['Low']);

    check(1);
    expect(active()).toEqual(['Medium']);

    check(2);
    check(3);
    expect(document.getElementById('score-count')!.textContent).toBe('4');
    expect(active()).toEqual(['High']);
  });

  it('prints from the print button', () => {
    const print = vi.fn();
    initChecklist(document, print);
    document.getElementById('print-button')!.click();
    expect(print).toHaveBeenCalledOnce();
  });

  it('defaults to the browser print dialog', () => {
    // happy-dom has no window.print, so provide one
    const print = vi.fn();
    vi.stubGlobal('print', print);
    initChecklist();
    document.getElementById('print-button')!.click();
    expect(print).toHaveBeenCalledOnce();
  });

  it('skips scoring when the score display is missing', () => {
    document.getElementById('score-live')!.remove();
    initChecklist();
    expect(() => check(0)).not.toThrow();
  });

  it('does nothing on a page without the checklist', () => {
    document.body.innerHTML = '';
    expect(() => initChecklist()).not.toThrow();
  });
});

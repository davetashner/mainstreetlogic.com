/** Live score for the tech friction checklist, plus its print button. */
export function initChecklist(
  doc: Document = document,
  print: () => void = () => window.print()
): void {
  const form = doc.getElementById('checklist') as HTMLFormElement | null;
  const live = doc.getElementById('score-live');
  const count = doc.getElementById('score-count');
  const total = doc.getElementById('score-total');
  const bands = doc.querySelectorAll<HTMLLIElement>('.bands li');
  const boxes = form?.querySelectorAll<HTMLInputElement>(
    'input[type="checkbox"]'
  );

  function update() {
    if (!boxes || !count || !live) return;
    const n = Array.from(boxes).filter((b) => b.checked).length;
    count.textContent = String(n);
    live.hidden = false;
    bands.forEach((band) => {
      const min = Number(band.dataset.min);
      const max = Number(band.dataset.max);
      band.toggleAttribute('data-active', n >= min && n <= max);
    });
  }

  if (boxes && total) total.textContent = String(boxes.length);
  form?.addEventListener('change', update);
  doc.getElementById('print-button')?.addEventListener('click', print);
}

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { initDiscountForm } from './hosting-discount';

const API = 'https://api.example.com/contact';

function render(email = 'pat@example.com') {
  document.body.innerHTML = `
    <div id="form-container">
      <form id="discount-form">
        <input name="email" value="${email}" />
        <input name="website" value="" />
        <button id="submit-button" type="submit">
          <span id="button-text">Get my discount code</span>
          <svg id="button-spinner" class="hidden"></svg>
        </button>
      </form>
      <div id="form-error" class="hidden"><span id="error-message"></span></div>
    </div>
    <div id="success-container" class="hidden"></div>`;
}

const el = (id: string) => document.getElementById(id)!;
const shown = (id: string) => !el(id).classList.contains('hidden');
const submit = () => el('discount-form').dispatchEvent(new Event('submit'));
const button = () => el('submit-button') as HTMLButtonElement;

function mockFetch(body: unknown, ok = true) {
  const fetch = vi.fn().mockResolvedValue({ ok, json: async () => body });
  vi.stubGlobal('fetch', fetch);
  return fetch;
}

describe('initDiscountForm', () => {
  beforeEach(() => render());

  it('rejects an invalid email without calling the API', () => {
    render('not-an-email');
    const fetch = mockFetch({ success: true });
    initDiscountForm(API);
    submit();
    expect(fetch).not.toHaveBeenCalled();
    expect(shown('form-error')).toBe(true);
    expect(el('error-message').textContent).toBe(
      'Please enter a valid email address.'
    );
  });

  it('shows success straight away when the API is not configured', () => {
    const fetch = mockFetch({ success: true });
    initDiscountForm('');
    submit();
    expect(fetch).not.toHaveBeenCalled();
    expect(shown('success-container')).toBe(true);
    expect(shown('form-container')).toBe(false);
  });

  it('sends the request and shows success', async () => {
    const fetch = mockFetch({ success: true });
    initDiscountForm(API);
    submit();

    expect(button().disabled).toBe(true);
    expect(el('button-text').textContent).toBe('Sending…');
    expect(shown('button-spinner')).toBe(true);

    await vi.waitFor(() => expect(shown('success-container')).toBe(true));
    expect(button().disabled).toBe(false);
    expect(el('button-text').textContent).toBe('Get my discount code');
    expect(shown('button-spinner')).toBe(false);

    const [url, init] = fetch.mock.calls[0];
    expect(url).toBe(API);
    expect(init.method).toBe('POST');
    expect(JSON.parse(init.body)).toMatchObject({
      name: 'Hosting Discount Request',
      email: 'pat@example.com',
      website: '',
    });
  });

  it('clears an earlier error on the next submit', async () => {
    mockFetch({ success: true });
    initDiscountForm(API);
    el('form-error').classList.remove('hidden');
    submit();
    expect(shown('form-error')).toBe(false);
    await vi.waitFor(() => expect(shown('success-container')).toBe(true));
  });

  it('shows the error the API returns', async () => {
    mockFetch({ error: 'Invalid email format' }, false);
    initDiscountForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toBe('Invalid email format');
    expect(shown('success-container')).toBe(false);
    expect(button().disabled).toBe(false);
  });

  it('falls back to a generic error when the API gives none', async () => {
    mockFetch({ success: false });
    initDiscountForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toBe(
      'Failed to submit. Please try again.'
    );
  });

  it('reports network failures', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    initDiscountForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toMatch(/Network error/);
    expect(log).toHaveBeenCalled();
    expect(button().disabled).toBe(false);
  });
});

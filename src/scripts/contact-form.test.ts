import { beforeEach, describe, expect, it, vi } from 'vitest';
import { initContactForm } from './contact-form';

const API = 'https://api.example.com/contact';

function render() {
  document.body.innerHTML = `
    <form id="contact-form">
      <input name="name" value="Pat" />
      <input name="email" value="pat@example.com" />
      <input name="business" value="Pat's Hardware" />
      <textarea name="message">Help with invoices</textarea>
      <input name="website" value="" />
      <button id="submit-button" type="submit">Send</button>
    </form>
    <div id="form-status" class="hidden">
      <div id="form-loading" class="hidden"></div>
      <div id="form-success" class="hidden"></div>
      <div id="form-error" class="hidden"><span id="error-message"></span></div>
    </div>`;
}

const el = (id: string) => document.getElementById(id)!;
const shown = (id: string) => !el(id).classList.contains('hidden');
const submit = () => el('contact-form').dispatchEvent(new Event('submit'));
const button = () => el('submit-button') as HTMLButtonElement;

function mockFetch(body: unknown, ok = true) {
  const fetch = vi.fn().mockResolvedValue({ ok, json: async () => body });
  vi.stubGlobal('fetch', fetch);
  return fetch;
}

describe('initContactForm', () => {
  beforeEach(render);

  it('asks people to email when the API is not configured', () => {
    const fetch = mockFetch({ success: true });
    initContactForm('');
    submit();
    expect(fetch).not.toHaveBeenCalled();
    expect(shown('form-error')).toBe(true);
    expect(el('error-message').textContent).toContain(
      'hello@mainstreetlogic.com'
    );
  });

  it('posts the form as JSON and shows success', async () => {
    const fetch = mockFetch({ success: true });
    initContactForm(API);
    submit();

    expect(button().disabled).toBe(true);
    expect(shown('form-status')).toBe(true);
    expect(shown('form-loading')).toBe(true);

    await vi.waitFor(() => expect(shown('form-success')).toBe(true));
    expect(shown('form-loading')).toBe(false);
    expect(button().disabled).toBe(false);
    expect(fetch).toHaveBeenCalledWith(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Pat',
        email: 'pat@example.com',
        business: "Pat's Hardware",
        message: 'Help with invoices',
        website: '',
      }),
    });
  });

  it('clears the form after a successful send', async () => {
    mockFetch({ success: true });
    const reset = vi.spyOn(el('contact-form') as HTMLFormElement, 'reset');
    initContactForm(API);
    submit();
    await vi.waitFor(() => expect(reset).toHaveBeenCalledOnce());
  });

  it('shows the error the API returns', async () => {
    mockFetch({ error: 'Invalid email format' }, false);
    initContactForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toBe('Invalid email format');
    expect(shown('form-success')).toBe(false);
    expect(button().disabled).toBe(false);
  });

  it('falls back to a generic error when the API gives none', async () => {
    mockFetch({ success: false });
    initContactForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toBe(
      'Failed to send message. Please try again.'
    );
  });

  it('treats an HTTP error as a failure even if the body says success', async () => {
    mockFetch({ success: true }, false);
    initContactForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(shown('form-success')).toBe(false);
  });

  it('reports network failures', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('offline')));
    const log = vi.spyOn(console, 'error').mockImplementation(() => {});
    initContactForm(API);
    submit();
    await vi.waitFor(() => expect(shown('form-error')).toBe(true));
    expect(el('error-message').textContent).toMatch(/Network error/);
    expect(log).toHaveBeenCalled();
    expect(button().disabled).toBe(false);
  });
});

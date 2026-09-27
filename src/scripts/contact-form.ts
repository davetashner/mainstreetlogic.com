/** Submit the contact form to the contact API and show the result. */
export function initContactForm(
  apiUrl: string,
  doc: Document = document
): void {
  const form = doc.getElementById('contact-form') as HTMLFormElement;
  const submitButton = doc.getElementById('submit-button') as HTMLButtonElement;
  const statusContainer = doc.getElementById('form-status') as HTMLDivElement;
  const loadingEl = doc.getElementById('form-loading') as HTMLDivElement;
  const successEl = doc.getElementById('form-success') as HTMLDivElement;
  const errorEl = doc.getElementById('form-error') as HTMLDivElement;
  const errorMessage = doc.getElementById('error-message') as HTMLSpanElement;

  /** Show one status panel (loading, success, or error) and hide the rest. */
  function showStatus(panel: HTMLElement) {
    statusContainer.classList.remove('hidden');
    for (const el of [loadingEl, successEl, errorEl]) {
      el.classList.toggle('hidden', el !== panel);
    }
  }

  function showError(message: string) {
    errorMessage.textContent = message;
    showStatus(errorEl);
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!apiUrl) {
      showError(
        'The contact form isn’t set up yet. Please email hello@mainstreetlogic.com directly.'
      );
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      business: formData.get('business'),
      message: formData.get('message'),
      website: formData.get('website'), // honeypot
    };

    submitButton.disabled = true;
    showStatus(loadingEl);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showStatus(successEl);
        form.reset();
      } else {
        showError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      showError('Network error. Please check your connection and try again.');
    } finally {
      submitButton.disabled = false;
    }
  });
}

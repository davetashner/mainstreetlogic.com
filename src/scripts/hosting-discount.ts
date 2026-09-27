/** Request a hosting discount code through the contact API. */
export function initDiscountForm(
  apiUrl: string,
  doc: Document = document
): void {
  const form = doc.getElementById('discount-form') as HTMLFormElement;
  const formContainer = doc.getElementById('form-container') as HTMLDivElement;
  const successContainer = doc.getElementById(
    'success-container'
  ) as HTMLDivElement;
  const submitButton = doc.getElementById('submit-button') as HTMLButtonElement;
  const buttonText = doc.getElementById('button-text') as HTMLSpanElement;
  const buttonSpinner = doc.getElementById('button-spinner') as Element;
  const errorEl = doc.getElementById('form-error') as HTMLDivElement;
  const errorMessage = doc.getElementById('error-message') as HTMLSpanElement;

  function showError(message: string): void {
    errorEl.classList.remove('hidden');
    errorMessage.textContent = message;
  }

  function setLoading(loading: boolean): void {
    submitButton.disabled = loading;
    if (loading) {
      buttonText.textContent = 'Sending…';
      buttonSpinner.classList.remove('hidden');
    } else {
      buttonText.textContent = 'Get my discount code';
      buttonSpinner.classList.add('hidden');
    }
  }

  function showSuccess(): void {
    formContainer.classList.add('hidden');
    successContainer.classList.remove('hidden');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.classList.add('hidden');

    const formData = new FormData(form);
    const email = formData.get('email') as string;
    const website = formData.get('website') as string; // honeypot

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please enter a valid email address.');
      return;
    }

    if (!apiUrl) {
      // Fallback: Show success anyway if API not configured (for testing)
      showSuccess();
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Hosting Discount Request',
          email: email,
          message:
            'Requested 50% hosting discount code via /resources/hosting-discount page.',
          website: website, // honeypot
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        showSuccess();
      } else {
        showError(result.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('Discount form error:', err);
      showError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  });
}

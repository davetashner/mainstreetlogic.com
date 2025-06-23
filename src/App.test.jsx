import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the logo on the home page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const logo = screen.getByAltText(/Mountain Inspiration/i);
  expect(logo).toBeInTheDocument();
});
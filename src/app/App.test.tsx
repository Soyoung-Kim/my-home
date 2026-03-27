import { render, screen } from '@testing-library/react';
import App from './App';

test('renders shell', () => {
  render(<App />);
  expect(screen.getByText(/My Home/i)).toBeInTheDocument();
});

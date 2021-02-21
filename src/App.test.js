import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello from react', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello REACT/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Hello from react', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello REACT/i);
  expect(linkElement).toBeInTheDocument();
});


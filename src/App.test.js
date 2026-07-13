import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
});

test('renders the hero section in English by default', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: 'Ivan Yurkevych' })).toBeInTheDocument();
  expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
});

test('switches all section content when a language button is clicked', () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', { name: /DE/i }));

  expect(screen.getByText('Frontend-Entwickler')).toBeInTheDocument();
  expect(screen.getByText('Nürnberg, Deutschland')).toBeInTheDocument();
});

test('remembers the chosen language across remounts', () => {
  const { unmount } = render(<App />);
  userEvent.click(screen.getByRole('button', { name: /UK/i }));
  expect(screen.getByText('Frontend-розробник')).toBeInTheDocument();
  unmount();

  render(<App />);
  expect(screen.getByText('Frontend-розробник')).toBeInTheDocument();
});

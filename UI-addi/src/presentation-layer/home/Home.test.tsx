import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home title', () => {
  render(<Home />);
  const textElement = screen.getByText(/Home/i);
  expect(textElement).toBeInTheDocument();
});

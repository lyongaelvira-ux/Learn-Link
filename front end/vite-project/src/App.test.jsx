import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  it('renders Users from Node.js API heading', () => {
    render(<App />);
    const heading = screen.getByText(/users from node\.js api/i);
    expect(heading).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('is truthy', () => {
    expect(<App />).toBeTruthy();
  });

  it('renders the restaurant provider component', () => {
    render(<App />);
    const providerElement = screen.getByTestId('restaurant-provider');
    expect(providerElement).toBeInTheDocument();
  });

  
});

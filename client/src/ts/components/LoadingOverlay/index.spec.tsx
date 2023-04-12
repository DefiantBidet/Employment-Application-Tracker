import { render, screen } from '@testing-library/react';

import LoadingOverlay from './index';

// import { createMockExercise, createMockExercisePrediction } from 'Test/utils';

describe('<LoadingOverlay />', () => {

  test('creates a base container', () => {
    render(<LoadingOverlay />);

    const element = document.querySelector('div.overlayBase');
    expect(element).toBeInTheDocument();
  });

  test('renders an SVG', () => {
    render(<LoadingOverlay />);

    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  test('renders expected icon', () => {
    render(<LoadingOverlay />);

    const icon = document.querySelector('use[href="#loading-icon"]');
    expect(icon).toBeInTheDocument();
  });
});

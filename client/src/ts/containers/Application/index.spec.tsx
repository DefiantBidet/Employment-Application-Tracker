import { render, waitFor } from '@testing-library/react';

import ApplicationList from './index';

describe('<ApplicationList />', () => {
  beforeEach(() => {
    render(<ApplicationList />);
  });

  test('Should render a container', () => {
    waitFor(() => {
      const element = document.querySelector('div#application-list-container');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render a loading display', () => {
    const element = document.querySelector('div#loading-display-container');
    expect(element).toBeInTheDocument();
  });

  test('todo...', () => {
    expect(false).toBe(true);
  });
});

// application-list-container

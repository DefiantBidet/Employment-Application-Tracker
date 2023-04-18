import { render, waitFor } from '@testing-library/react';

import ApplicationDetails from './details';

describe('<ApplicationDetails />', () => {

  describe('Display UI', () => {
    beforeEach(() => {
      render(<ApplicationDetails />);
    });

    test('Should render a container', () => {
      waitFor(() => {
        const element = document.querySelector('div#application-details-container');
        expect(element).toBeInTheDocument();
      });
    });
  });

  // describe('Edit UI', () => {
  //   // TODO...
  // });
});

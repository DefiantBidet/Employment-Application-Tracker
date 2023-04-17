import { render, waitFor } from '@testing-library/react';

import CompanyDetailsContainer from './details';

describe('<CompanyDetailsContainer />', () => {

  describe('Display UI', () => {
    beforeEach(() => {
      render(<CompanyDetailsContainer />);
    });

    test('Should render a container', () => {
      waitFor(() => {
        const element = document.querySelector('div#company-details-container');
        expect(element).toBeInTheDocument();
      });
    });

    test('Should render a container for notes and contacts', () => {
      waitFor(() => {
        const element = document.querySelector('div#company-contact-notes-container');
        expect(element).toBeInTheDocument();
      });
    });

    test('Should render a notes container', () => {
      waitFor(() => {
        const element = document.querySelector('div#company-contact-container');
        expect(element).toBeInTheDocument();
      });
    });

    test('Should render a contacts container', () => {
      waitFor(() => {
        const element = document.querySelector('div#company-notes-container');
        expect(element).toBeInTheDocument();
      });
    });
  });

  // describe('Edit UI', () => {
  //   // TODO...
  // });
});

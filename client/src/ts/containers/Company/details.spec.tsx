import { render, waitFor } from '@testing-library/react';

import CompanyDetailsContainer from './details';

describe('<CompanyDetailsContainer />', () => {

  beforeEach(() => {
    render(<CompanyDetailsContainer />);
  });

  test('Should render a container', () => {
    waitFor(() => {
      const element = document.querySelector('div#company-details-container');
      expect(element).toBeInTheDocument();
    });

  });
});

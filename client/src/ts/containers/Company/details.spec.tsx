import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

import CompanyDetailsContainer from './details';
// import { createMockCompany } from 'Test/utils';

describe('<CompanyDetailsContainer />', () => {

  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders a container', () => {
    render(<CompanyDetailsContainer />);

    const element = document.querySelector('div.exerciseContainer');
    expect(element).toBeInTheDocument();
  });
});

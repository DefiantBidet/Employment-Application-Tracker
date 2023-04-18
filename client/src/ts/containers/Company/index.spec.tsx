import { render, waitFor } from '@testing-library/react';

import CompanyList from './index';

describe('<CompanyList />', () => {
  beforeEach(() => {
    render(<CompanyList />);
  });

  test('Should render a container', () => {
    waitFor(() => {
      const element = document.querySelector('div#company-list-container');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render an unordered list of companies', () => {
    waitFor(() => {
      const listEl = document.querySelector('ul#company-list');
      const listItems = document.querySelectorAll('li');

      expect(listEl).toBeInTheDocument();
      expect(listItems?.length).toBeGreaterThan(0);
    });
  });

  test('Should render an anchor link for company in list', () => {
    const hrefRegex = /^\/company\/\d+$/;
    waitFor(() => {
      const linkEl = document.querySelector('a[id^=company-list-link]');
      const links = document.querySelectorAll('a[id^=company-list-link]');
      expect(links.length).toBeGreaterThan(0);
      expect(linkEl).toBeInTheDocument();
      expect(linkEl?.getAttribute('href')).toMatch(hrefRegex);
    });
  });
});

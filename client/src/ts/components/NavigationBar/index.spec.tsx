import { render } from '@testing-library/react';

import NavigationBar from '.';
import { links } from './links';

describe('<NavigationBar />', () => {
  test('Should render a Nav Element', () => {
    render(<NavigationBar />);

    const navEl = document.querySelector('nav');
    expect(navEl).toBeInTheDocument();
  });

  test('Should render an icon/logo', () => {
    render(<NavigationBar />);

    const logoEl = document.querySelector('#nav-logo');
    expect(logoEl).toBeInTheDocument();
  });

  test('Should render application title', () => {
    render(<NavigationBar />);
;
    const titleEl = document.querySelector('#nav-title');
    expect(titleEl).toBeInTheDocument();
  });

  test('Should render links', () => {
    render(<NavigationBar />);
;
    const navLinksEl = document.querySelector('#nav-links-container');
    expect(navLinksEl).toBeInTheDocument();
    expect(navLinksEl?.children.length).toBe(links.length);
  });

  describe('Navigation Bar Links', () => {
    beforeEach(() => {});

    test.each([...links])('Link %o', (linkData) => {
      render(<NavigationBar />);

      const link = document.querySelector(`#${linkData.name}`);
      expect(link).toBeInTheDocument();
      expect(link?.id).toBe(linkData.name);
      expect(link?.getAttribute('href')).toBe(linkData.href);
      expect(link?.innerHTML).toBe(linkData.label);
    });
  });
});

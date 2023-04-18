import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as router from 'react-router';

import ApplicationList from './index';

const ogWindowLocation = window.location;

describe('<ApplicationList />', () => {
  const mockNavigate = jest.fn()

  beforeAll(() => {
    Reflect.deleteProperty(global.window, 'location');
    Reflect.set(global.window, 'location', new URL('http://localhost'));
  });

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate')
      .mockImplementation(() => mockNavigate)

    render(<ApplicationList />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    Reflect.deleteProperty(global.window, 'location');
    global.window.location = ogWindowLocation;
  });

  test('Should render a container', () => {
    const element = document.querySelector('#application-list-container');
    expect(element).toBeInTheDocument();
  });

  test('Should render a loading display', () => {
    const element = document.querySelector('#loading-display-container');
    expect(element).toBeInTheDocument();
  });

  test('Should render a Data container', async () => {
    await waitFor(() => {
      const element = document.querySelector('#application-data-container');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render a Toolbar component', async () => {
    await waitFor(() => {
      const element = document.querySelector('#application-data-toolbar');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render a DataSearch component', async () => {
    await waitFor(() => {
      const element = document.querySelector('#application-data-search');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render a DataFilters component', async () => {
    await waitFor(() => {
      const element = document.querySelector('#application-data-filters');
      expect(element).toBeInTheDocument();
    });
  });

  test('Should render a DataTable component', async () => {
    await waitFor(() => {
      const table = document.querySelector('#application-data-table');
      expect(table).toBeInTheDocument();
    });
  });

  test('Should navigate to new URL on row click', async () => {
    const urlRegex = /^\/application\/\d+$/;

    await waitFor(() => {
      const table = document.querySelector('#application-data-table');
      expect(table).toBeInTheDocument();
    });

    const tableRows = Array.from(document.querySelectorAll('#application-data-table tr'));
    const lastRow = tableRows[tableRows.length - 1];
    expect(lastRow).toBeInTheDocument();

    await userEvent.click(lastRow);

    const navigateUrl = mockNavigate.mock.lastCall[0];
    expect(navigateUrl).toMatch(urlRegex);
  })
});

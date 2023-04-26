import { useEffect } from 'react';
import { Grommet } from 'grommet';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import applicationTheme from './theme';

import ApplicationContainer from 'Containers/Application/index';
import CompanyContainer from 'Containers/Company/index';
import DataVisualizationContainer from 'Containers/DataVisualization';

// FIXME: Remove...
import ApplicationDetailsContainer from 'Containers/Application/details';
import CompanyDetailsContainer from 'Containers/Company/details';

import NavigationBar from 'Components/NavigationBar/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationContainer />,
  },
  {
    path: "application/:applicationId",
    element: <ApplicationDetailsContainer />,
    // element: <ApplicationContainer />,
  },
  {
    path: "companies",
    element: <CompanyContainer />,
  },
  {
    path: "company/:companyId",
    element: <CompanyDetailsContainer />,
    // element: <CompanyContainer />,
  },
  {
    path: "visualization",
    element: <DataVisualizationContainer />,
  },
]);

/**
 * The main entry point of the Application to display a list of
 * experiments and select an experiment to view more information.
 * @return {JSX.Element}
 * @function
 */
export default function App(): JSX.Element {

  // When the component mounts - fetch the experiment list
  useEffect(() => {
    // const fetchExperiments = async () => {
      // const response = await loadExperiments();

      // if (response.data) {
      //   setLoading(false);
      //   setExperimentList(response.data);
      // }

    // };

    // fetchExperiments().catch(console.error);

    console.log('App mounted!');
  }, []);

  return (
    <Grommet theme={applicationTheme}>
      <NavigationBar />
      <RouterProvider router={router} />
    </Grommet>
  );
}

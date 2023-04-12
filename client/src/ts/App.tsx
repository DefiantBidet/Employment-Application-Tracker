import { useEffect } from 'react';
import { Grommet } from 'grommet';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import applicationTheme from 'theme';

import ApplicationContainer from 'Containers/Applications';
import ApplicationDetailsContainer from 'Containers/Applications/Details';
import CompanyContainer from 'Containers/Companies';
import CompanyDetailsContainer from 'Containers/Companies/Details';
import DataVisualizationContainer from 'Containers/DataVisualization';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationContainer />,
  },
  {
    path: "application/:applicationId",
    element: <ApplicationDetailsContainer />,
  },
  {
    path: "companies",
    element: <CompanyContainer />,
  },
  {
    path: "company/:companyId",
    element: <CompanyDetailsContainer />,
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
      <RouterProvider router={router} />
    </Grommet>
  );
}

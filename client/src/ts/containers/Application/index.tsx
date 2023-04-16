import { useEffect, useState } from 'react';
import { Box } from 'grommet';

import * as DefiantBidetAPI from 'DefiantBidet';
import { loadApplications } from 'Api/application';

/**
 * ApplicationContainer creates a Application List UI
 * @return {JSX.Element}
 * @function
 */
export default function ApplicationContainer(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [applicationList, setApplicationList] = useState<DefiantBidetAPI.Application[] | null>(null);

  // When the component mounts - fetch the applications list
  useEffect(() => {
    const fetchApplications = async () => {
      const response = await loadApplications();

      if (response.data) {
        setLoading(false);
        setApplicationList(response.data);
      }
    };

    fetchApplications().catch(console.error);
  }, []);

  const renderLoadingDisplay = () => {
    return(
      <>Loading...</>
    );
  }

  return (
    <Box fill align="center" justify="center">
      {JSON.stringify(applicationList)}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}

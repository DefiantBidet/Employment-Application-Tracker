import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  // Button,
  Heading,
  // Paragraph,
  Spinner
} from 'grommet';

import { loadApplication } from 'Api/application';

import DefiantBidet from 'DefiantBidet';

/**
 * ApplicationDetailsContainer creates a Application Details UI
 * @return {JSX.Element}
 * @function
 */
export default function ApplicationDetailsContainer(): JSX.Element {
  const { applicationId } = useParams();
  const [uiState, _ /*setUiState*/] = useState<DefiantBidet.EDITABLE_UI_STATE>(DefiantBidet.EDITABLE_UI_STATE.DISPLAY);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [applicationInfo, setApplicationInfo] = useState<DefiantBidet.Application | null>(null);

  // When the component mounts - fetch the application details
  useEffect(() => {
    if (!applicationId) {
      // exit if no url param present
      return;
    }

    const fetchApplicationData = async () => {
      const response = await loadApplication(applicationId);

      if (response.data) {
        setLoading(false);
        setApplicationInfo(response.data);
      }
    };

    fetchApplicationData().catch(console.error);
  }, [applicationId]);

  const renderEditDisplay = (): JSX.Element => {
    return (
      <>
        test
      </>
    );
  };

  const renderInfoDisplay = (): JSX.Element => {
    return (
      <>
        <Heading
          a11yTitle="company-name"
          id="company-name"
          margin="none"
        >
          {applicationInfo?.role}
        </Heading>
      </>
    );
  };

  const renderLoadingDisplay = (): JSX.Element => (
    <Box fill align="center" justify="center">
      <Spinner />
    </Box>
  );

  return (
    <Box
      fill
      align="center"
      id="application-details-container"
      justify="center"
    >
      {uiState === DefiantBidet.EDITABLE_UI_STATE.EDIT && renderEditDisplay()}
      {uiState === DefiantBidet.EDITABLE_UI_STATE.DISPLAY && renderInfoDisplay()}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}

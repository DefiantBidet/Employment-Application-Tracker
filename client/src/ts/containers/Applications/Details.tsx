import { Box } from 'grommet';
import { useParams } from 'react-router-dom';

/**
 * ApplicationDetailsContainer creates a Application Details UI
 * @return {JSX.Element}
 * @function
 */
export default function ApplicationDetailsContainer(): JSX.Element {
  const { applicationId } = useParams();

  return (
    <Box fill align="center" justify="center">
      Application: {applicationId}
    </Box>
  );
}

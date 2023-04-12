import { Box } from 'grommet';
import { useParams } from 'react-router-dom';

/**
 * CompanyDetailsContainer creates a Company Details UI
 * @return {JSX.Element}
 * @function
 */
export default function CompanyDetailsContainer(): JSX.Element {
  const { companyId } = useParams();

  return (
    <Box fill align="center" justify="center">
      Company: {companyId}
    </Box>
  );
}

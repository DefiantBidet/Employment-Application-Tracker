import { useEffect, useState } from 'react';
import { Box } from 'grommet';

import * as DefiantBidetAPI from 'DefiantBidet';
import { loadCompanies } from 'Api/company';

/**
 * CompanyContainer creates a Company List UI
 * @return {JSX.Element}
 * @function
 */
export default function CompanyContainer(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [companyList, setCompanyList] = useState<DefiantBidetAPI.Company[] | null>(null);

  // When the component mounts - fetch the company list
  useEffect(() => {
    const fetchCompanies = async () => {
      const response = await loadCompanies();

      if (response.data) {
        setLoading(false);
        setCompanyList(response.data);
      }
    };

    fetchCompanies().catch(console.error);
  }, []);

  const renderLoadingDisplay = () => {
    return(
      <>Loading...</>
    );
  }

  return (
    <Box fill align="center" justify="center">
      {JSON.stringify(companyList)}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}

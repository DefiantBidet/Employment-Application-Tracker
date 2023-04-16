import { useEffect, useState } from 'react';
import {
  Anchor,
  Box,
  Spinner
} from 'grommet';

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

  const renderCompany = (company: DefiantBidetAPI.Company, index: number): JSX.Element => {
    const key = `company-${company.id}-row-${index}`;

    return (
      <li key={key}>
        <Anchor
          id={`company-list-link-${company.id}`}
          href={`/company/${company.id}`}
          label={company.name}
        />
      </li>
    );
  }

  const renderCompaniesList = (): JSX.Element => {
    return (
      <>
        <ul
          id="company-list"
          style={{
            listStyle: 'none'
          }}
        >
          { companyList?.map(renderCompany) }
        </ul>
      </>
    );
  }

  const renderLoadingDisplay = () => (
    <Box fill align="center" justify="center">
      <Spinner />
    </Box>
  )

  return (
    <Box
      fill
      align="center"
      direction="column"
      id="company-list-container"
      justify="center"
    >
      {companyList && renderCompaniesList()}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}

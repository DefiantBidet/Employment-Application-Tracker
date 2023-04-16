import /* React, */ { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  // Button,
  Heading,
  Paragraph,
  Spinner
} from 'grommet';

import * as DefiantBidetAPI from 'DefiantBidet';

import { loadCompany } from 'Api/company';
// import { loadContacts } from 'Api/contact';

enum UI_STATE {
  EDIT = 'Edit',
  DISPLAY = 'Display',
}

/**
 * CompanyDetailsContainer creates a Company Details UI
 * @return {JSX.Element}
 * @function
 */
export default function CompanyDetailsContainer(): JSX.Element {
  const { companyId } = useParams();
  const [uiState, _ /*setUiState*/] = useState<UI_STATE>(UI_STATE.DISPLAY);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [companyInfo, setCompanyInfo] = useState<DefiantBidetAPI.Company | null>(null);

  // When the component mounts - fetch the company details
  useEffect(() => {
    if (!companyId) {
      // exit if no url param present
      return;
    }

    const fetchCompanyData = async () => {
      const response = await loadCompany(companyId);

      if (response.data) {
        setLoading(false);
        setCompanyInfo(response.data);
      }
    };

    fetchCompanyData().catch(console.error);
  }, [companyId]);

  const renderEditDisplay = () => {
    return (
      <>
        test
      </>
    );
  };

  const renderInfoDisplay = () => {
    return (
      <Box
        align="center"
        justify="center"
        direction="column"
        width="100%"
      >
        <Heading
          a11yTitle="company-name"
          margin="none"
        >
          {companyInfo?.name}
        </Heading>

        <hr
          color="brand"
          style={{
            width: '100%'
          }}
        />
        <Box
          fill
          align="center"
          justify="center"
          direction="row"
        >
          <Box
            align="center"
            direction="column"
            justify="center"
            pad="small"
            width="60%"
          >
            <Box
              align="center"
              direction="column"
              justify="center"
              width="100%"
            >
              contacts...
            </Box>
          </Box>
          <Box
            align="start"
            border={{ color: 'brand', size: 'small' }}
            direction="column"
            height="100%"
            pad="small"
            width="40%"
          >
            Company Notes: <br />
            <Paragraph
              margin="none"
              a11yTitle="company-notes"
              >
              {'Add Company Note...'}

            </Paragraph>
          </Box>
        </Box>
      </Box>
    );
  };

  const renderLoadingDisplay = () => (
    <Box fill align="center" justify="center">
      <Spinner />
    </Box>
  )

  return (
    <Box
      fill
      align="center"
      id="company-details-container"
      justify="center"
    >
      {uiState === UI_STATE.EDIT && renderEditDisplay()}
      {uiState === UI_STATE.DISPLAY && renderInfoDisplay()}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}
/*

  const onEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    setUiState(UI_STATE.EDIT);
  };

  const onCancelEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    setUiState(UI_STATE.DISPLAY);
  };

<Box fill align="center" justify="center" direction="row">
          <Button secondary label="Edit" onClick={onEditClick} />
          { uiState === UI_STATE.EDIT && <Button primary label="Cancel" onClick={onCancelEditClick} /> }
        </Box>
 */

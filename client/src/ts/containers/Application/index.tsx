import { useEffect, useState } from 'react';
import {
  Box,
  ColumnConfig,
  Spinner,
} from 'grommet';

import {
  Data,
  DataSearch,
  DataFilters,
  DataFilter,
  DataSort,
  DataSummary,
  DataTable,
} from 'grommet/components';
import { Toolbar } from 'grommet/components/Toolbar';

import DefiantBidet from 'DefiantBidet';
import { loadApplications } from 'Api/application';

/**
 * ApplicationContainer creates a Application List UI
 * @return {JSX.Element}
 * @function
 */
export default function ApplicationContainer(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [applicationList, setApplicationList] = useState<DefiantBidet.Application[] | null>(null);

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

  const renderApplicationTable = (): JSX.Element | null => {
    if(!applicationList || applicationList.length == 0) {
      return null;
    }


    const columnShape: ColumnConfig<DefiantBidet.Application>[] = [
      {
        property: 'id',
        header: 'ID',
        primary: true
      },
      {
        property: 'applied_date',
        header: 'Date Applied',
      },
      {
        property: 'company_name',
        header: 'Name',
      },
      {
        property: 'role',
        header: 'Position',
      },
      {
        property: 'status',
        header: 'Status',
      },
      {
        property: 'salary',
        header: 'Salary',
      },
      {
        property: 'red_flag',
        header: 'Red Flag',
      },
    ];

    return (
      <Data data={applicationList}>
        <Toolbar>
          <DataSearch />
          <DataFilters drop>
            <DataFilter property="company_name" />
            <DataSort />
          </DataFilters>
        </Toolbar>
        <Box flex overflow="auto">
          <DataTable columns={columnShape} />
        </Box>
        <DataSummary />
      </Data>
    );
  }

  const renderLoadingDisplay = (): JSX.Element => (
    <Box
      fill
      align="center"
      id="loading-display-container"
      justify="center"
    >
      <Spinner />
    </Box>
  )

  return (
    <Box
      fill
      align="center"
      id="application-list-container"
      justify="center"
    >
      {applicationList && renderApplicationTable()}
      {isLoading && renderLoadingDisplay()}
    </Box>
  );
}

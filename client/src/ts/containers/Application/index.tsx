import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  MouseClick,
  KeyPress,
} from 'grommet/components';
import { Toolbar } from 'grommet/components/Toolbar';

import { FlagFill } from 'grommet-icons'

import * as API from 'Types/api';

import { loadApplications } from 'Api/application';

/**
 * ApplicationContainer creates a Application List UI
 * @return {JSX.Element}
 * @function
 */
export default function ApplicationContainer(): JSX.Element {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [applicationList, setApplicationList] = useState<API.Application[] | null>(null);
  let navigate = useNavigate();

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

  const onApplicationSelect = (event: MouseClick<API.Application> | KeyPress<API.Application>) => {
    event.stopPropagation();
    event.preventDefault();

    const { datum: applicationData } = event;
    navigate(`/application/${applicationData.id}`);
  }

  const renderApplicationTable = (): JSX.Element | null => {
    if(!applicationList || applicationList.length == 0) {
      return null;
    }

    const columnShape: ColumnConfig<API.Application>[] = [
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
        header: '',
        render: datum => {
          if (!datum.red_flag) {
            return null;
          }
          return (
            <FlagFill color="plain" style={{ fill: 'red' }} />
          );
        },
      },
    ];

    return (
      <Data id="application-data-container" data={applicationList}>
        <Toolbar id="application-data-toolbar">
          <DataSearch id="application-data-search" />
          <DataFilters id="application-data-filters" drop>
            <DataFilter property="company_name" />
            <DataSort />
          </DataFilters>
        </Toolbar>
        <Box flex overflow="auto">
          <DataTable
            id="application-data-table"
            columns={columnShape}
            primaryKey="id"
            onClickRow={onApplicationSelect}
            sortable={true}
          />
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

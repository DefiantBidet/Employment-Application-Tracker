import { useContext, useEffect } from 'react';

import * as Types from 'DefiantBidet';

import ExperimentPanel from 'Components/ExperimentPanel';
import ExperimentWrapper from 'Components/ExperimentContainer';
import LoadingOverlay from 'Components/LoadingOverlay';
import { ExperimentContext } from 'Contexts/ExperimentContext';

import styles from 'Styles/app.scss';

const appElement = document.querySelector('main#app');
const correlatedSVGsElement = document.querySelector('svg.correlated-svgs');

// Apply styles from App bundle to DOM - this is a webpack dev server issue
// and should not be needed but didn't wan't to waste time on bundling setup issues
appElement?.classList.add(styles.appContainer);
correlatedSVGsElement?.classList.add(styles.svgContainer);

/**
 * The main entry point of the Application to display a list of
 * experiments and select an experiment to view more information.
 * @return {JSX.Element}
 * @function
 */
export default function App(): JSX.Element {
  const {
    experimentLoading,
    setExperimentLoading,
    setSelectedExperiment,
    setExperimentList,
  } = useContext(ExperimentContext);

  // When the component mounts - fetch the experiment list
  useEffect(() => {
    // const fetchExperiments = async () => {
    const fetchExperiments = () => {
      // const response = await loadExperiments();

      // if (response.data) {
      //   setLoading(false);
      //   setExperimentList(response.data);
      // }

      const mockJSON = [
        {
          id: '6a4ebc38-56a2-44a9-9445-c734b5f225f1',
          name: 'Test 1',
          description: 'a three.js test',
          enabled: true,
        },
        {
          id: '80efd0db-afa1-4e35-a9bc-6327ca5dcf93',
          name: 'Test 2',
          description: 'another three.js test',
          enabled: true,
        },
        {
          id: '6e068298-d457-4930-8bc1-6fa1868f29e4',
          name: 'Disabled Test',
          description: 'a disabled three.js test',
          enabled: false,
        },
      ];

      setExperimentLoading(false);
      setExperimentList(mockJSON);
    };

    // fetchExperiments().catch(console.error);
    fetchExperiments();
  }, []);

  const onChangeExperiment = (experiment: Types.Experiment): void => {
    setExperimentLoading(true);
    setSelectedExperiment(experiment);
  };

  return (
    <>
      <ExperimentPanel onChange={onChangeExperiment} />
      <ExperimentWrapper />
      {experimentLoading && <LoadingOverlay />}
    </>
  );
}

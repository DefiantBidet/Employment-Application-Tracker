import { useContext } from 'react';
// import React, { useContext, useEffect, useRef, useState } from 'react';

// import * as Types from 'DefiantBidet';
import { ExperimentContext } from 'Contexts/ExperimentContext';
import Experiments from 'Experiments/index';

import styles from 'Styles/components/experimentContainer.scss';

/**
 * todo...
 * @return {JSX.Element}
 * @function
 */
export default function ExperimentsWrapper(): JSX.Element {
  const { selectedExperiment } = useContext(ExperimentContext);

  const renderEmptyStage = () => <>
    <div className={styles.emptyContainer}>
      No experiment selected.
    </div>
  </>

  const renderExperiment = () => {
    let experiment: JSX.Element | null = null;

    switch (selectedExperiment?.id) {
      case '6a4ebc38-56a2-44a9-9445-c734b5f225f1': {
        experiment = (<Experiments.InnerSphere />);
        break;
      }
      default: {
        experiment = null;
        break;
      }
    }
    return (
      <>
        {experiment}
      </>
    );
  };

  return (
    <>
      <div className={styles.experimentContainer}>
        {!selectedExperiment && renderEmptyStage()}
        {selectedExperiment && renderExperiment()}
      </div>
    </>
  );
}

/*
look into:
z indexing via scss variables not hardcoded
passing viewport boundries to this component so it can be resized/moved
 */

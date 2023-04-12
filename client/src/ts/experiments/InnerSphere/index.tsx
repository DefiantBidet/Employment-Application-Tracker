import { useContext, useEffect } from 'react';
import * as THREE from 'three';

import { ExperimentContext } from 'Contexts/ExperimentContext';

// import styles from 'Styles/components/InnerSphere.scss';

/**
 * todo...
 * @return {JSX.Element}
 * @function
 */
export default function InnerSphere(): JSX.Element {
  const { setExperimentLoading } = useContext(ExperimentContext);

  useEffect(() => {
    setExperimentLoading(false);
  }, []);

  return (
    <>Ima ball</>
  );
}

/*
look into requestAnimationKeyframe hooks
 */

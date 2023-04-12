import React, { useContext, useEffect, useRef, useState } from 'react';

import * as Types from 'DefiantBidet';
import { ExperimentContext } from 'Contexts/ExperimentContext';

import styles from 'Styles/components/experimentPanel.scss';

const awaitTimeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));

const delayClose = async (container: React.RefObject<HTMLDivElement>, className: string): Promise<void> => {
  // timer in seconds (s * ms)
  const closeTimer = 3 * 1000;
  const containerEl = container.current;

  await awaitTimeout(closeTimer);
  containerEl?.classList.add(className);
};

export interface ExperimentPanelProps {
  onChange: (experiment: Types.Experiment) => void
}

/**
 * ExperimentPanel renders a panel to display a list of Three.js experiments
 * @return {JSX.Element}
 * @function
 */
export default function ExperimentPanel({
  onChange,
}: ExperimentPanelProps): JSX.Element {
  const { experimentList } = useContext(ExperimentContext);
  const [isOpen, setOpen] = useState<Boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  let closeTimeoutId: number | null = null;

  useEffect(() => {
    if(!containerRef.current) {
      return;
    }

    delayClose(containerRef, styles.slideOffView)
      .then(() => {
        setOpen(false);
      })
      .catch(console.error);
  }, [containerRef]);

  const onMouseOverHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if(!isOpen) {
      const containerEl = containerRef.current;

      containerEl?.classList.remove(styles.slideOffView);
      containerEl?.classList.add(styles.slideIntoView);
      setOpen(true);
    }

    if (closeTimeoutId) {
      clearTimeout(closeTimeoutId);
      closeTimeoutId = null;
    }
  };

  const onMouseOutHandler = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();

    if(!isOpen) {
      return;
    }

    // delayClose(containerRef, styles.slideOffView)
    //   .then(() => {
    //     setOpen(false);
    //   })
    //   .catch(console.error);
  };

  return (
    <>
      <div
        ref={containerRef}
        className={styles.experimentPanelContainer}
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
      >
        <h1>Experiments</h1>
        <ul className={styles.listContainer}>
          {
            experimentList
              .map((experiment) => (
                <li key={experiment.id}>
                  <a
                    href="#"
                    onClick={() => onChange(experiment)}
                  >
                    {experiment.name}
                  </a>
                </li>
              ))
          }
        </ul>
      </div>
    </>
  );
}

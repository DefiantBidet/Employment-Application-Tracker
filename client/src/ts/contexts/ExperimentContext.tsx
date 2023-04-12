import React, { createContext, useState } from 'react';

import * as Types from 'DefiantBidet';

const noop = () => { /* noop */ };

export interface IExperimentContext {
  experimentList: Types.Experiment[];
  setExperimentList: (experimentList: Types.Experiment[]) => void;
  selectedExperiment: Types.Experiment | null;
  setSelectedExperiment: (experiment: Types.Experiment) => void;
  experimentLoading: boolean;
  setExperimentLoading: (loading: boolean) => void;
}

const initialContext = {
  experimentList: [],
  setExperimentList: noop,
  selectedExperiment: null,
  setSelectedExperiment: noop,
  experimentLoading: false,
  setExperimentLoading: noop,
};

export const ExperimentContext = createContext<IExperimentContext>(initialContext);

interface ExperimentProviderProps {
  children?: React.ReactNode;
}

const ExperimentProvider: React.FC<ExperimentProviderProps> = ({ children }) => {
  const [experimentList, setExperimentList] = useState<Types.Experiment[]>([]);
  const [selectedExperiment, setSelectedExperiment] = useState<Types.Experiment | null>(null);
  const [experimentLoading, setExperimentLoading] = useState<boolean>(false);

  const providerValues: IExperimentContext = {
    experimentList,
    setExperimentList,
    selectedExperiment,
    setSelectedExperiment,
    experimentLoading,
    setExperimentLoading,
  };

  return <ExperimentContext.Provider value={providerValues}>{children}</ExperimentContext.Provider>;
};

export default ExperimentProvider;

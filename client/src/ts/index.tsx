import ReactDOM from 'react-dom';

import App from './App';
import ExperimentProvider from 'Contexts/ExperimentContext';

const appElement = document.querySelector('main#app');

ReactDOM.render(
  <ExperimentProvider>
    <App />
  </ExperimentProvider>,
  appElement,
);

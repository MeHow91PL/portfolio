import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
=======
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {
  history,
  store
} from './store';

import App from './App';

import './components/layout/layout.css';

ReactDOM.render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>
  ,
>>>>>>> cd1034b9c2ceffd335d95c2e25b82dc26e242f07
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

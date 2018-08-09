import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

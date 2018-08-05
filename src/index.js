import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {store, history} from './store';

import '../src/styles/main.css';


ReactDOM.render(
    <Provider store={store}>
            <App history={history} />
    </Provider>, document.getElementById('root')
);

registerServiceWorker();

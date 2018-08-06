import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
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

>>>>>>> ad82d129737209e4172c225bd53ee882b0aaefee
registerServiceWorker();

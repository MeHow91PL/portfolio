import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

export const history = createBrowserHistory();

export const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
)
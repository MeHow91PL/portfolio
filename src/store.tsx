import {
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
    applyMiddleware,
    createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

export const history = createBrowserHistory();

export const store = createStore(
    connectRouter(history)(rootReducer),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history)
        )
    )
)
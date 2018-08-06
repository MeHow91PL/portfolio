import { combineReducers } from 'redux';

export const redtest = (state = {}, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return state
        default:
            return state
    }
}


export default combineReducers(
    {
        redtest
    }
);
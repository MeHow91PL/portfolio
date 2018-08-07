import {combineReducers} from 'redux';

export const temp = (state = [], action: any) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return state
        default:
            return state
    }
}

export default combineReducers({
    temp
})
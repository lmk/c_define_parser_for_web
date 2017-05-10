import { ALL_LIST } from '../actions';

const initialState = {
    value: -1
};

const reqListReducer = (state = initialState, action) => {
    console.log("TRACE reducers/index.js");
    switch(action.type) {
        case ALL_LIST:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};

export default reqListReducer;
import { combineReducers } from 'redux';

const cashbackReducer = (state = { cashback: 0 }, action) => {
    switch (action.type) {
        case 'UPDATE_CASHBACK':
            return {
                ...state,
                cashback: action.cashback
            };
        default:
            return state;
    }
};

export const Reducers = combineReducers({
    cashbackState: cashbackReducer
});
import { combineReducers } from 'redux';
import generalReducer from './generalReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    general: generalReducer,
    user: userReducer,
});

export default rootReducer;

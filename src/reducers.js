import { combineReducers } from 'redux';

import timerReducer from '../src/views/App/Footer/timerReducer';

const rootReducer = combineReducers({
  timerReducer,
});

export default rootReducer;

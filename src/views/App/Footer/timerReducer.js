import * as ACTION_TYPES from './timerActionTypes';

const INITIAL_STATE = {
  time: new Date().getTime(),
};



export const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ACTION_TYPES.UPDATE:
      return {...state, time: action.update_time};

    default:
      return state;
  }
};


export default timerReducer;

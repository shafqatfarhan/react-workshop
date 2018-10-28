import {UPDATE} from "./timerActionTypes";

export const updateTime = (time) => {
  return {
    type: UPDATE,
    update_time: time
  };
};

import * as actionTypes from "./action_type";

export const increaseVal = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decreaseVal = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

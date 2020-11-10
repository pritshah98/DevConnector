import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// action is an object that takes in the type of action, and a payload(optional)

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      // state is immutable so if there is something already there, we need to copy it over (using spread operator) and then add our alert on to it
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}

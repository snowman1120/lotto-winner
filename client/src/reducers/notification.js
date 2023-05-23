import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from '../actions/types';

const initialState = [];

function notificationReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NOTIFICATION:
      return [...state, payload];
    case REMOVE_NOTIFICATION:
      return state.filter((notification) => notification.id !== payload);
    default:
      return state;
  }
}

export default notificationReducer;

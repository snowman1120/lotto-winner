import { v4 as uuidv4 } from 'uuid';
import { SET_NOTIFICATION, REMOVE_NOTIFICATION } from './types';

export const setAlert = (msg, notificationType, timeout = 5000) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_NOTIFICATION,
    payload: { msg, notificationType, id }
  });

  setTimeout(() => dispatch({ type: REMOVE_NOTIFICATION, payload: id }), timeout);
};

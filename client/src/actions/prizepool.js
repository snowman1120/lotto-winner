import api from '../utils/api';
import { setAlert } from './alert';
import {
    GET_WILLDRAWTIME,
    UPDATE_COUNTDOWNTIME,
    SET_TOTAL_PAY_AMOUNT
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

export const getCountdownTimeLocal = () => async (dispatch) => {
    dispatch({
        type: UPDATE_COUNTDOWNTIME,
    });
};

export const setTotalPayAmount = (amount) => async (dispatch) => {
    dispatch({
        type: SET_TOTAL_PAY_AMOUNT,
        payload: amount
    })
}
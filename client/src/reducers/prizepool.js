import {
    GET_WILLDRAWTIME,
    UPDATE_COUNTDOWNTIME,
    SET_TOTAL_PAY_AMOUNT
  } from '../actions/types';
  
  const initialState = {
    willDrawTime : 1669850000,
    countdownTime: 0,
    prizepoolAmount: 1250000,

    totalPayAmount: 0
  };
  
  function prizepoolReducer(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
      case UPDATE_COUNTDOWNTIME: {
        let countdownTime = state.willDrawTime - Math.floor(Date.now() / 1000);
        return {
            ...state,
            countdownTime
        }
      }
      case SET_TOTAL_PAY_AMOUNT: {
        return {
          ...state,
          totalPayAmount: payload
        }
      }
      default:
          return state;
    }
  }
  
  export default prizepoolReducer;
  
import { combineReducers } from 'redux';
import auth from './auth';
import alert from './alert';
import prizepool from './prizepool';
import notification from './notification';


import profile from './profile';
import post from './post';


export default combineReducers({
  auth,
  prizepool,
  alert,
  notification,

  profile,
  post,
});

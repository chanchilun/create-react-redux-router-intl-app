import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import IntlReducer from './IntlReducer';
import {authentication} from './authentication.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';

export default combineReducers({
  routing: routerReducer,
  IntlReducer,
  authentication,
  users,
  alert
});

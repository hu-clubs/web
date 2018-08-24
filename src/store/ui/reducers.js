import {combineReducers} from 'redux';
import navbarReducer from './navbar/reducers';

export default combineReducers({
  navbar: navbarReducer
});

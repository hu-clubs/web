import {createStore, combineReducers} from 'redux';
import { authentication } from './authentication/reducers';
import * as authenticationActions from './authentication/actions';
import { clubs } from './club/reducers';
import * as clubActions from './club/actions';

let reducers = combineReducers({
  clubs,
  authentication
});

const store = createStore(reducers);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(authenticationActions.setJwt('1'));
store.dispatch(authenticationActions.setJwt('2'));
store.dispatch(authenticationActions.setJwt(''));
store.dispatch(authenticationActions.setJwt('3'));

store.dispatch(clubActions.setClubs([
  {
    id: '1',
    name: 'Chi Sigma Alpha'
  },
  {
    id: '2',
    name: 'Sigma Phi Mu'
  }
]));

unsubscribe();

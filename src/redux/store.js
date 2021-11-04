import {combineReducers,createStore} from 'redux';
import mainReducer from './main-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
mainPage: mainReducer,
usersPage: usersReducer
});

let store = createStore(reducers);

export default store;

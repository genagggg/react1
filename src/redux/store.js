import {combineReducers,createStore} from 'redux';
import mainReducer from './main-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
mainPage: mainReducer,
usersPage: usersReducer,
newsPage: newsReducer
});

let store = createStore(reducers);

export default store;

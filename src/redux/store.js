import {combineReducers,createStore} from 'redux';
import blogReducer from './blog-reducer';
import mainReducer from './main-reducer';
import newsReducer from './news-reducer';
import repReducer from './rep-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
mainPage: mainReducer,
usersPage: usersReducer,
newsPage: newsReducer,
blogPage: blogReducer,
repPage: repReducer
});

let store = createStore(reducers);

export default store;

import {combineReducers,createStore} from 'redux';
import blogReducer from './blog-reducer';
import mainReducer from './main-reducer';
import newsReducer from './news-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
mainPage: mainReducer,
usersPage: usersReducer,
newsPage: newsReducer,
blogPage: blogReducer
});

let store = createStore(reducers);

export default store;

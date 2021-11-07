const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    users:[
        {id: 1, name: 'Aleksandr', age: 23},
        {id: 2, name: 'Yuriy', age: 32},
        {id: 3, name: 'Grigoriy', age: 21}
    ],
    newPostText: 'it-incubator'
}
const usersReducer=(state=initialState, action)=>{
switch(action.type){
    case ADD_POST:{
let newPost={
    id: 4,
    name: state.newPostText,
    age:0
};
return {...state,
users:[...state.users, newPost],
newPostText: ''
}
    }
    case UPDATE_NEW_POST_TEXT:{
        return {...state,
        newPostText: action.newText 
    }
    }
default:
    return state;
}
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text)=> ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default usersReducer;
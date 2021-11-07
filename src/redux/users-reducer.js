const ADD_POST = 'ADD_POST';

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
default:
    return state;
}
}

export const addPostAC = () => ({type: ADD_POST});

export default usersReducer;
const ADD_NEW_POST="ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT="UPDATE_NEW_POST_TEXT";
let initialState={
    users: [
        {id: 1, name:"Olegro"},
        {id: 2, name: "Egor"},
        {id: 3, name: "Nikolay"}
    ],
newPostText: "it it"
}

const blogReducer=(state=initialState, action)=>{
switch(action.type){
case ADD_NEW_POST:{
    let newPost={
        id: 4,
        name: state.newPostText
    }
    return {
        ...state,
        users:[...state.users, newPost],
        newPostText: ""
    }
}
case UPDATE_NEW_POST_TEXT:{
    return {
        ...state,
        newPostText: action.newText
    }
}
default:
return state
}
}

export const addNewPost=()=>({type:ADD_NEW_POST});
export const updateNewPostText=(text)=>({type:UPDATE_NEW_POST_TEXT, newText: text})
export default blogReducer;
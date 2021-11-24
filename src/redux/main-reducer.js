const ADD_POST="ADD_POST";
const UPDATE_NEW_POST_TEXT="UPDATE_NEW_POST_TEXT";

let initialState = {
    users: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Egor'}
    ],
    newPostText:"iy iy"

}
const mainReducer =(state=initialState, action)=>{
switch(action.type){
    case ADD_POST:{
        let newPost={
            id:4,
            name:state.newPostText
        }
        return {
...state,
users:[...state.users, newPost],
newPostText:""
        }
    }
    case UPDATE_NEW_POST_TEXT:{
        return {
            ...state,
            newPostText: action.newText
        }
    }
    default:
        return state;
}

}

export const addNewPost=()=>({type:ADD_POST});
export const updateNewPostText=(text)=>({type:UPDATE_NEW_POST_TEXT,newText: text});

export default mainReducer;
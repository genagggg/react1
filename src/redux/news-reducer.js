const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT="UPDATE_NEW_POST_TEXT";

let initialState={
    post: [
        {id: 1, note: 'Сегодня класная погода'},
        {id: 2, note: 'Очень красиво в акапулько'},
        {id: 3, note: 'Попробуем сегодня отобразить этот код'}
    ],
    newPostText: 'superState'
}
const newsReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:{
let newPost = {
    id: 4,
    note: state.newPostText,
};
            return {...state,
                post:[...state.post, newPost],
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

export const addPostAC =()=>({type: ADD_POST});
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default newsReducer;
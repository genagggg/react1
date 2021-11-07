const ADD_POST = 'ADD_POST';

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
        default:
            return state;
    }
}

export const addPostAC =()=>({type: ADD_POST});
export default newsReducer;
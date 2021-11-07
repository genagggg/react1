const ADD_POST = 'ADD_POST';

let initialState={
    post: [
        {id: 1, note: 'Сегодня класная погода'},
        {id: 2, note: 'Очень красиво в акапулько'},
        {id: 3, note: 'Попробуем сегодня отобразить этот код'}
    ]
}
const newsReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:{

            return state;
        }
        default:
            return state;
    }
}

export const newsReducerAC =()=>({type: ADD_POST});
export default newsReducer;
const ADD_POST="ADD_POST";
let initialState={
    posts: [
{id: 1, name:"Today wery good day" },
{id: 2, name:"Tommorow fain Jenifer"},
{id: 3, name:"Every day so match"}
    ],
    newPostText:"Hay every body"
}

const repReducer=(state=initialState, action)=>{

    switch(action.type){
case ADD_POST:{
    let newPost={
        id: 4,
        name: state.newPostText
    }
    return{
...state,
posts:[...state.posts, newPost],
newPostText: ""
    }
}
default:{
    return state;
}
    }
}

export const addPost=()=>({type: ADD_POST});

export default repReducer
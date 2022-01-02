const FOLLOW = "FOLLOW";
const UNFOLLOW ="UNFOLLOW";
const SET_USERS="SET_USERS";

let initialState ={
    users: [
        {id: 1,photoUrl:'https://sun9-38.userapi.com/impf/c637116/v637116652/5601f/UBVmLvE2Yzg.jpg?size=1280x721&quality=96&sign=ae0fb5a54f8035856ac211c19a2bd736&type=album',followed:false, name: 'Sasha'},
        {id: 2,photoUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.cdn.teleprogramma.pro%2Fwp-content%2Fuploads%2F2019%2F02%2F3234a90b1ebc1206b4f2f0557c510bff.jpg&f=1&nofb=1',followed: true, name: 'Kolya'},
        {id: 3,photoUrl:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.cdn.teleprogramma.pro%2Fwp-content%2Fuploads%2F2019%2F02%2F3234a90b1ebc1206b4f2f0557c510bff.jpg&f=1&nofb=1',followed: false ,name: 'Egor'}
    ]

}
const mainReducer =(state=initialState, action)=>{
switch(action.type){
    case FOLLOW:{
return {
    ...state,
    users:state.users.map(u=>{
        if(u.id===action.userId){
            return {...u, followed: true}
        }
    })
}
}
    case UNFOLLOW:{
        return{
            ...state,
            users:state.users.map(u=>{
                if(u.id===action.userId){
                    return {...u, followed: false}
                }
            })
        }
    }
    case SET_USERS:{
        return{
...state,
users:[...state.users, ...action.users]
        }
    }
    default:
        return state;
}

}

export const followAC=(userId)=>({type: FOLLOW, userId});
export const unfollowAC =(userId)=>({type: UNFOLLOW, userId});
export const setUsersAC=(users)=>({type: SET_USERS, users})

export default mainReducer;
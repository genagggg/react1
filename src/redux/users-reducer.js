const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        {id:1,followed:false, fullName: "Oleg", status: "I am a boss", location:{city: "Minsk", country: "Belarus"}},
        {id:2,followed:false, fullName: "Robert", status: "I am a boss too", location:{city: "Moscow", country: "Russia"}},
        {id:3,followed:true, fullName: "Andrey", status: "I am a boss every day", location:{city: "Kiev", country: "Ukrain"}},
        {id:4,followed:false, fullName: "Alehandro Koba", status: "I am a boss second chip", location:{city: "Tbilicy", country: "Georgia"}}

    ]
}
const usersReducer=(state=initialState, action)=>{
switch(action.type){
case FOLLOW:{
    return{
        ...state,
        users:state.users.map(u=>{
            if(u.id===action.userId){
                return {...u, followed: true}
            }
            return u})
    }
}
default:
    return state;
}}
export const followAC=(userId)=>({type: FOLLOW, userId});
export const unfollowAC=(userId)=>({type: UNFOLLOW, userId});
export default usersReducer;
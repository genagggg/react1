import Main from './Main'
import {connect} from 'react-redux'
import {  followAC, setUsersAC, unfollowAC } from '../../redux/main-reducer'
let mapStateToProps=(state)=>{
    return{
        users: state.mainPage.users
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow: (userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps) (Main);
export default MainContainer;
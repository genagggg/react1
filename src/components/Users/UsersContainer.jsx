
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps =(state)=>{
    return {
        users: state.usersPage.users,
        newPostText: state.usersPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextAC(text));
        },
        
        addPost:() => {
        dispatch(addPostAC());
    }
  
}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;
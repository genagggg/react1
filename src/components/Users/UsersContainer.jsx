
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps =(state)=>{
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return 0;
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;
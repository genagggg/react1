import Main from './Main'
import {connect} from 'react-redux'
import { addNewPost, updateNewPostText } from '../../redux/main-reducer'
let mapStateToProps=(state)=>{
    return{
        users: state.mainPage.users,
        newPostText: state.mainPage.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        addNewPost:()=>{dispatch(addNewPost())},
        updateNewPostText: (text)=>{dispatch(updateNewPostText(text))}
    }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps) (Main);
export default MainContainer;
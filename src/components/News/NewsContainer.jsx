import News from "./News";
import { connect } from "react-redux";
import { addPostAC } from "../../redux/users-reducer";

let mapStateToProps =(state)=>{
return {
post: state.newsPage.post,
newPostText: state.newsPage.newPostText
}
}

let mapDispatchToProps = (dispatch) =>{
    return {
addPost: ()=>{ dispatch(addPostAC())}
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
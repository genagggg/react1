import News from "./News";
import { connect } from "react-redux";
import { addPostAC, updateNewPostTextAC } from "../../redux/news-reducer";

let mapStateToProps =(state)=>{
return {
post: state.newsPage.post,
newPostText: state.newsPage.newPostText
}
}

let mapDispatchToProps = (dispatch) =>{

    return {
updateNewPostChange: (text)=>{
        dispatch(updateNewPostTextAC(text));
    },
addPost: ()=>{ dispatch(addPostAC());
}
    }

}



const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default NewsContainer;
import React from "react";
import { connect } from "react-redux";
import Blog from "./Blog";
import {addNewPost, updateNewPostText} from "../../redux/blog-reducer";

class BlogContainer extends React.Component{
render(){
    return <Blog />
}
}

let mapStateToProps=(state)=>{
    return {
        users: state.blogPage.users,
        newPostText: state.blogPage.newPostText
    }
}

let mapDispatchToProps=(dispatch)=>{
    return {
        addNewPost:()=>{
            dispatch(addNewPost());
        },
        updateNewPostText:(text)=>{
            dispatch(updateNewPostText(text));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
import React from "react";
import { connect } from "react-redux";
import Rep from "./Rep";
import {addPost} from "../../redux/rep-reducer";

class RepContainer extends React.Component{
   
    render(){
        return <Rep {...this.props} posts={this.props.posts}
        addPost={this.props.addPost}
        />
    }
}

let mapStateToProps=(state)=>{
    return {
        posts: state.repPage.posts,
        newPostText: state.repPage.newPostText
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        addPost:()=>{
            dispatch(addPost())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepContainer);
import React from 'react';
import s from './Blog.module.css';

const Blog =(props)=> {

    let reff=React.createRef();
    let onAddPost=()=>{
        return props.addNewPost();
    }
   let onUpdateText=()=>{
        let text=reff.current.value;
        return props.updateNewPostText(text);
    }
let use = props.users.map(u=><p>{u.name}</p>);

    return (<div>
        <div>{use}</div>
        <div><textarea onChange={onUpdateText} ref={reff} value={props.newPostText}></textarea></div>
       <div><button onClick={onAddPost}>Click Me Please</button></div>
       </div>);
    
}

export default Blog;
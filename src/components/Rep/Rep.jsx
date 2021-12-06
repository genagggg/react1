import React from "react";

const Rep =(props)=>{
let onAddPost=()=>{
    props.addPost();
}
let post=props.posts.map(p=><p>{p.name}</p>);
    return (
        <div>
<div style={{color:"red"}}>{post}</div>
       <textarea style={{border: "1px solid green"}} value={props.newPostText}></textarea>
        <div><button onClick={onAddPost} style={{background:"yellow"}}>addPost</button></div>
        </div>
    );
}

export default Rep;
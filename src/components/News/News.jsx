import s from '../Main/Main.module.css';
import React from 'react';
const News =(props)=> {
    let UsName=props.nameUsers.map((el)=>{
        return <div>{el.uname}</div>;
    });
let ref=React.createRef();
let addPost =()=>{
   props.addPost();
}
let onPostChange=()=>{
    let text=ref.current.value;
    props.updateNewPostText(text);
}
    return (
<div>
    <div>{UsName}</div>
    <div><textarea ref={ref} onChange={onPostChange}  value={props.newP}></textarea></div>
    <div><button onClick={addPost}>Нажми</button></div>
</div>
    );
}

export default News;
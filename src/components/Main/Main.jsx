import React from 'react';
import s from './Main.module.css';

const Main =(props)=> {
    let reff=React.createRef();

 let onAddPost=()=>{
     props.addNewPost();
 }
let onUpdateNewPostText=()=>{
    let text=reff.current.value;
    props.updateNewPostText(text);
}

let use=props.users.map(u=><p>{u.name}</p>);


    return (
<div>
    <div>{use}</div>
    <textarea ref={reff} className={s.textArea} value={props.newPostText} onChange={onUpdateNewPostText}></textarea>
    <button onClick={onAddPost}>ClickMe</button>
</div>
    );

}

export default Main;
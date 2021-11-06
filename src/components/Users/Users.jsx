import React from "react";
import s from "./Users.module.css";

const Users =(props)=>{
let gef=React.createRef();

let onAddPost = () => {
    props.addPost();
}

let use = props.users.map(u=><p>{u.name}</p>);
return(
    <div>
       <div>{use}</div> 

       <div>
           <textarea ref={gef} className={s.textarrea} value={props.newPostText}></textarea>
           <button onClick={onAddPost}>Нажим</button>
       </div>
    </div>
)
}

export default Users;
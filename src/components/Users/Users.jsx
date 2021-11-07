import React from "react";
import s from "./Users.module.css";

const Users =(props)=>{
let gef=React.createRef();

let onAddPost = () => {
    props.addPost();
}

let onPostChange =()=>{

    let text = gef.current.value;
    props.updateNewPostText(text);

}

let use = props.users.map(u=><p>{u.name}</p>);

return(
    <div>
       <div>{use}</div> 

       <div>
           <textarea ref={gef} className={s.textarrea} value={props.newPostText} onChange={onPostChange}></textarea>
           <button onClick={onAddPost}>Нажим</button>
       </div>
    </div>
)
}

export default Users;
import React from "react";
import s from "./Users.module.css";

const Users =(props)=>{
let gef=React.createRef();



let alerTO =()=>{
    let text = gef.current.value;
    alert(text);
}


    let use = props.users.map(u=><p>{u.name}</p>);
return(
    <div>
       <div>{use}</div> 

       <div>
           <textarea ref={gef} className={s.textarrea}></textarea>
           <button onClick={alerTO}>Нажим</button>
       </div>
    </div>
)
}

export default Users;
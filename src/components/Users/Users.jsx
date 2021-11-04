import React from "react";

const Users =(props)=>{
    let use = props.users.map(u=><p>{u.name}</p>);
return(
    <div>
        {use}
    </div>
)
}

export default Users;
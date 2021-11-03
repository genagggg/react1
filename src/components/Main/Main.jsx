import React from 'react';
import s from './Main.module.css';

const Main =(props)=> {
 let use=props.users.map(u=><div>{u.name}</div>);
    return (
<div>
    <p>{use}</p>

</div>
    );

}

export default Main;
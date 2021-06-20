import React from 'react';
import s from './Blog.module.css';
import { NavLink } from 'react-router-dom';
const User =(props)=>{

let path="/blog/"+props.id;

return <NavLink to={path}><div className={s.useR}>
{props.name}
 </div></NavLink>
}

const Blog =(props)=> {

    let n = [
        {id:1, name:'Andrey'},
        {id:2, name:'Robert'},
        {id:3, name:'Artur'},
        {id:4, name:'Anjela'},
        {id:5, name:'Svets'}
    ]
    return <div className={s.Blog}>
<div className={s.userName}>
<User name={n[0].name} id={n[0].id}/>
<User name={n[1].name} id={n[1].id} />
<User name={n[2].name} id={n[2].id} />
<User name={n[3].name} id={n[3].id} />
<User name={n[4].name} id={n[4].id} />
</div>

<div className={s.message}>
    <div className={s.mess}>Hi</div>
    <div className={s.mess}>How are you</div>
    <div className={s.mess}>yo</div>
    <div className={s.mess}>Hi</div>
</div>
</div>
    
}

export default Blog;
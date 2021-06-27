import React from 'react';
import s from '../Blog.module.css';
import { NavLink } from 'react-router-dom';
const User =(props)=>{

let path="/blog/"+props.id;

return <NavLink to={path}><div className={s.useR}>
{props.name}
 </div></NavLink>
}

export default User;
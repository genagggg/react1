import React from 'react';
import s from '../Blog.module.css';


const Message =(props)=> {
    return <div className={s.mess}>
{props.name}
    </div>
}
export default Message;
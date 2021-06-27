import React from 'react';
import s from './Blog.module.css';
import User from './User/User';
import Message from './Message/Message';

const Blog =(props)=> {

    let n = [
        {id:1, name:'Andrey'},
        {id:2, name:'Robert'},
        {id:3, name:'Artur'},
        {id:4, name:'Anjela'},
        {id:5, name:'Svets'}
    ];
let messageUser = [
    {id:1, messages:"Hi"},
    {id:2, messages:"How"},
    {id:3, messages:"Are"},
    {id:4, messages:"You"},
    {id:5, messages:"yes"}
];

    let userData = n.map(
        n=><User name={n.name} id={n.id} />
    );

    let messagU = messageUser.map(
        m => <Message name={m.messages} />
    );
    
    return <div className={s.Blog}>
<div className={s.userName}>
{userData}
</div>

<div className={s.message}>
    {messagU}
</div>
</div>
    
}

export default Blog;
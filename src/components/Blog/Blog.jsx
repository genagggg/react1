import React from 'react';
import s from './Blog.module.css';
import User from './User/User';
import Message from './Message/Message';

const Blog =(props)=> {



    let userData = props.n.map(
        n=><User name={n.name} id={n.id} />
    );

    let messagU = props.messageUser.map(
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
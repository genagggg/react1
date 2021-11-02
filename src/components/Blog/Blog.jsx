import React from 'react';
import s from './Blog.module.css';

const Blog =()=> {
let mess = {
    mess1:[
        {id: 1, name:'igor'},
        {id: 2, name: 'jora'},
        {id: 3, name: 'kolya'}
    ]
}

let mess2 = mess.mess1.map(m=><div>{m.name}</div>)
    return (<div>
       <p className={s.color}>{mess2}</p> 
       
         </div>);
    
}

export default Blog;
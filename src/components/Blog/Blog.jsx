import React from 'react';
import s from './Blog.module.css';

const Blog =()=> {
let message = {
  mess1:[
    {id:1, name: 'Igor', age:23},
    {id:2, name: 'Oleg', age: 34},
    {id:3, name: 'Kolya', age: 45}
  ]
}
let mess2 = message.mess1.map(m=><div>{m.id}</div>)
    return (<div>
       <p className={s.color}>{mess2}</p> 
       
         </div>);
    
}

export default Blog;
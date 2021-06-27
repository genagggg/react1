import React from 'react';
import s from '../Main/Main.module.css';

const Roof =(props)=> {
    let nameUsers =[
        'Andrey','Kolya','Igor','Lola'
    ];

    let userData = nameUsers.map((el)=>{
return <div>{el}Hooy</div>;
    });
    return (
<div>{userData}</div>
    );
}

export default Roof;
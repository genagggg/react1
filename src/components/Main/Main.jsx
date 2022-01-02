import React from 'react';
import s from './Main.module.css';
import MainButton from './MainButton/MainButton';
const Main =(props)=> {
 

    return (
<div>
    {
        props.users.map(u=><div key={userId}>
            
        </div>)
    }
</div>
    );

}

export default Main;
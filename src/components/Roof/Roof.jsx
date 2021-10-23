import React from 'react';
import s from '../Main/Main.module.css';

const Roof =(props)=> {
    

    let userData = props.nameUsers.map((el)=>{
return <div>{el.uname}Hooy</div>;
    });
let ref=React.createRef();

    let addPost = ()=>{
        let text = ref.current.value;
        alert(text);
    }

    return (
<div>{userData}
<textarea ref={ref}></textarea>
<div><button onClick={addPost}>Отправить</button></div>
</div>
    );
}

export default Roof;
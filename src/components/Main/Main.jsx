import React from 'react';
import s from './Main.module.css';

const Main =(props)=> {
  let postElement = React.createRef();

  let addPost = ()=> {
      let text = postElement.current.value;
      alert(text);
  }

    let data ={
        users: [
            {id: 1, name: "Igor"},
            {id:2, name: "Roma"}
        ],
        userOld:[
            {id: 1, old: 21},
            {id: 2, old: 24},
            {id: 3, old: 34}
        ]
    }

    let mass = data.users.map(d=><div>{d.id}</div>);
    return (
<div>
    
    <div><textarea ref={postElement} ></textarea></div>
    <div><button onClick={addPost}>AddPost</button></div>
<div>{mass}</div>
</div>
    );

}

export default Main;
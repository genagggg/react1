import React from 'react';
const Couch =(props)=>{
   let addNam=props.n.map((el)=>{
           return <div>{el.name}</div>;
   });
let ref=React.createRef();
let addName=()=>{
    let text=ref.current.value;
    alert(text);
}

    return(
<div>
    <h1>{addNam}</h1>
    <div><textarea ref={ref}></textarea></div>
    <div><button onClick={addName}>Нажми</button></div>
</div>
    );
}

export default Couch;
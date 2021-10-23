import React from 'react';
import s from './Grisha.module.css';
const Grisha = () => {
    let gogo = {
        name: 'Kolya',
        age: 18
    }
    let b=gogo;
    let c={...b}
return (<div>
 <p className={s.po}>Синяя птица</p>
 <p>{gogo.name}</p>
 <p>{b.name}</p>
 <p>{c.age}</p>
 </div>
  );
}

export default Grisha;
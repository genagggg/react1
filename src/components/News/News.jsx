import s from './News.module.css';
import React from 'react';
const News =(props)=> {
   let reff = React.createRef();
        return (<div>
                <div>
                        <div></div>
                        <textarea className={s.textarea} ref={reff}></textarea>
                        <button >Нажми</button>
                </div>
        </div>);
 

    
}

export default News;
import s from './News.module.css';
import React from 'react';
const News =(props)=> {
      
   let reff = React.createRef();
   let onAddPost = () => {
      props.addPost();
   }
   let posts = props.post.map(p=><p>{p.note}</p>);
        return (<div>
                <div>
                        <div>{posts}</div>
                        <textarea className={s.textarea} ref={reff} value={props.newPostText}></textarea>
                        <button onClick={onAddPost}>Нажми</button>
                </div>
        </div>);
 

    
}

export default News;
import s from './Content.module.css';
import Main from './Main/Main.jsx';
const Content =()=> {
return(<div>
<div className={s.content}>
<div className={s.container}>
    <Main score="0"/>
    <Main score="24"/>
</div>
</div>
</div>
);
}
export default Content;
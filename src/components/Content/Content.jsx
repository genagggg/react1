import s from './Content.module.css';
import Main from './Main/Main.jsx';
import Blog from './Blog/Blog.jsx';
import News from './News/News.jsx';
import Contact from './Contact/Contact.jsx';
import Roof from './Roof/Roof.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
const Content =()=> {
return(
<BrowserRouter><div>
<div className={s.content}>
<div className={s.container}>
<Route path='/main' component={Main} />
<Route path='/blog' component={Blog} />
<Route path='/news' component={News} />
<Route path='/contact' component={Contact} />
<Route path='/roof' component={Roof} />
</div>
</div>
</div>
</BrowserRouter>
);
}
export default Content;
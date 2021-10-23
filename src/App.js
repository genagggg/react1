import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './components/Main/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import News from './components/News/News.jsx';
import Contact from './components/Contact/Contact.jsx';
import Roof from './components/Roof/Roof.jsx';
import Couch from './components/Couch/Couch';
import Mmm from './components/Mmm/Mmm';
import Grisha from './components/Grisha/Grisha';
function App(props) {

  return (<BrowserRouter>
    <div>
       <Header />
       <div className="wrapper">
         <Route path='/main' render={()=><Main />} />
         <Route  path='/blog' render={()=><Blog n={props.state.n} messageUser={props.state.messageUser} />} />
         <Route path='/news' render={()=><News newP={props.state.newP} nameUsers={props.state.nameUsers} updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>} />
         <Route path='/contact' component={Contact} />
         <Route path='/roof' render={()=><Roof nameUsers={props.state.nameUsers} />} />
         <Route path='/couch' render={()=><Couch n={props.state.n}/>} />
         <Route path='/mmm' render={()=><Mmm />} />
         <Route path='/grisha' render={()=><Grisha />} />
         </div>
       <Footer />
        </div>
        </BrowserRouter >
  );
}

export default App;

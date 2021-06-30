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
function App(props) {

  return (<BrowserRouter>
    <div>
       <Header />
       <div className="wrapper">
         <Route path='/main' render={()=><Main />} />
         <Route  path='/blog' render={()=><Blog n={props.n} messageUser={props.messageUser} />} />
         <Route path='/news' component={News} />
         <Route path='/contact' component={Contact} />
         <Route path='/roof' component={Roof} />
        
         </div>
       <Footer />
        </div>
        </BrowserRouter >
  );
}

export default App;

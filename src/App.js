import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route} from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';
import Blog from './components/Blog/Blog.jsx';
import News from './components/News/News.jsx';
import Contact from './components/Contact/Contact.jsx';
import Roof from './components/Roof/Roof.jsx';
import Couch from './components/Couch/Couch';
import Mmm from './components/Mmm/Mmm';
import Grisha from './components/Grisha/Grisha';
const App=(props)=> {

  return (
    <div>
       <Header />
       <div className="wrapper">
         <Route path='/main' render={()=><MainContainer />} />
         <Route  path='/blog' render={()=><Blog  />} />
         <Route path='/news' render={()=><News />} />
     </div>
       <Footer />
        </div>
        
  );
}

export default App;

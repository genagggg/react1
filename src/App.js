import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route} from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';
import Blog from './components/Blog/Blog.jsx';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
const App=(props)=> {

  return (
    <div>
       <Header />
       <div className="wrapper">
         <Route path='/main' render={()=><MainContainer />} />
         <Route  path='/blog' render={()=><Blog  />} />
         <Route path='/news' render={()=><NewsContainer />} />
         <Route path='/users' render={()=><UsersContainer />}/>
     </div>
       <Footer />
        </div>
        
  );
}

export default App;

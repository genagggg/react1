import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route} from 'react-router-dom';
import MainContainer from './components/Main/MainContainer';
import UsersContainer from './components/Users/UsersContainer';
import NewsContainer from './components/News/NewsContainer';
import Go from './components/Go/Go';
import BlogContainer from './components/Blog/BlogContainer';
const App=(props)=> {

  return (
    <div>
       <Header />
       <div className="wrapper">
         <Route path='/main' render={()=><MainContainer />} />
         <Route  path='/blog' render={()=><BlogContainer  />} />
         <Route path='/news' render={()=><NewsContainer />} />
         <Route path='/users' render={()=><UsersContainer />}/>
         <Route path='/go' render={()=><Go />}/>
       </div>
       <Footer />
    </div>
        
  );
}

export default App;

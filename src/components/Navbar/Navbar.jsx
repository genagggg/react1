import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar =()=> {
return (
   
          <nav>
            <ul>
              <li><NavLink to="/main">Main</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><a href="/news">News</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/roof">Roof</a></li>
            </ul>
           </nav> 
  
);
}
export default Navbar;
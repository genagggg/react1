import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
const Navbar =()=> {
return (
   
          <nav>
            <ul>
              <li><NavLink to="/main">Main</NavLink></li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/roof">Roof</NavLink></li>
              <li><NavLink to="/couch">Couch</NavLink></li>
              <li><NavLink to="/mmm">Mmm</NavLink></li>
              <li><NavLink to="/grisha">Grisha</NavLink></li>
            </ul>
           </nav> 
  
);
}
export default Navbar;
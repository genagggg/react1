import React from 'react';
import s from './Header.module.css';
const Header =()=> {
    return (
    <div>
          <header>
          <div className={s.container}>
          <div className={s.logo}></div> 
          <nav>
            <ul>
              <li>Main</li>
              <li>Blog</li>
              <li>News</li>
              <li>Contact</li>
              <li>Roof</li>
            </ul>
            </nav> 
          </div>
        </header>
    </div>
    );
}

export default Header;
import React from 'react';
import s from './Header.module.css';
import Navbar from './Navbar/Navbar.jsx';
const Header =()=> {
    return (
    <div>
          <header>
          <div className={s.container}>
          <div className={s.logo}></div> 
          <Navbar />
          </div>
        </header>
    </div>
    );
}

export default Header;
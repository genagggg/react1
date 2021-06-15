import React from 'react';
import s from './Header.module.css';
import Navbar from '../Navbar/Navbar.jsx';
import Logo from './Logo/Logo.jsx';
const Header =()=> {
    return (
    <div>
          <header>
          <div className={s.container}>
          <Logo />
          <Navbar />
          </div>
        </header>
    </div>
    );
}

export default Header;
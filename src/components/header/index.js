import React from 'react';
import classNames from 'classnames';
import { ReactComponent as MenuIcon } from '../../global/assets/icons/hamburger.svg';
import { ReactComponent as LoginIcon } from '../../global/assets/icons/icon-login.svg';
import Search from '../search';

import './header.scss';

const Header = ({ type, isLoggedIn = false }) => {
  
  const Login = () => {
    return (
      <div className="isLogin">
        <span className="loginText">
          Log in / Sign up
        </span>
        <LoginIcon  className="loginIcon"/>
      </div>
    )
  }

  const User = () => {
    return (
      <div className="isLogin">
        User
      </div>
    )
  }

  const isLogin = isLoggedIn ? User() : Login();
  var headerType = classNames({
    'Header': true,
    'position-absolute': type === 'floating',
    'position-relative': type === 'fixed'
  });

  return (
    <header className={headerType}>
      <div className="logo">
        <MenuIcon fill="black" stroke="black" className="menuIcon"/>
        <span className="title">Little Tag</span>
      </div>  
      <div className="search">
        <Search />
      </div>
      {
        isLogin
      }
    </header>
  )
}

export default Header;
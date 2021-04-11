import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as MenuIcon } from '../../global/assets/icons/hamburger.svg';
import { HEADER } from '../../constants';
import Search from '../Search';
import Login from '../Login';
import User from '../User';
import SideBar from '../SideBar';
import './Header.scss';

const Header = ({ type, isLoggedIn = false, bgColor = HEADER.BACKGROUND.WHITE }) => {

  var headerType = classNames({
    'Header': true,
    'position-absolute': type === HEADER.TYPE.FLOATING,
    'position-relative': type === HEADER.TYPE.FIXED
  });
  const header = useRef(null);
  const [drawerState, setDrawerState] = useState(false);
  const [textColor, setTextColor] = useState('black')
  const isLogin = isLoggedIn ? <User fill={textColor} /> : <Login fill={textColor} />;
  useEffect(() => {
    const computed = window.getComputedStyle(header.current).getPropertyValue("background-color");
    if(computed !== 'rgb(255, 255, 255)') {
      setTextColor('white');
    }
  },[header])

  return (
    <header ref={header} className={headerType} style={{ backgroundColor:bgColor, color:textColor }}>
      <SideBar openDrawer={drawerState} currentState={(state) => setDrawerState(state)}/>
      <div className="logo">
        <MenuIcon fill={textColor} stroke={textColor} className="menuIcon" onClick={() => setDrawerState(true)}/>
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
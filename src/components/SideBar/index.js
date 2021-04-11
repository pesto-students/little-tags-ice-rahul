import React, { useRef, useEffect } from 'react';
import { ReactComponent as CrossIcon } from '../../global/assets/icons/icon-cross.svg';
import { ReactComponent as UserIcon } from '../../global/assets/icons/icon-user.svg';
import { DRAWER } from '../../constants';
import './SideBar.scss';

const SideBar = ({ openDrawer = false, currentState }) => {

  const sideBar = useRef(null);

  const toggleDrawer = (drawerState) => {
    const position = drawerState === DRAWER.OPEN ? '0px' : '-500px';
    sideBar.current.style.left=position;
  }

  useEffect(() => {
    if(openDrawer) {
      toggleDrawer(DRAWER.OPEN);
      currentState(false);
    }
  },[openDrawer, currentState])

  return (
    <div className="SideBar" ref={sideBar}>
      <div className="titleBar">
        <span className="cursor-pointer" onClick={() => toggleDrawer(DRAWER.CLOSE)}>
          <CrossIcon width="24px"/>
        </span>
        <span className="sideBarTitle cursor-pointer">
          Little Tags
        </span>
      </div>
      <div className="titleUser">
        <UserIcon stroke="white" width="24px" height="24px" /><span>Hey, Ayush</span>
      </div>
      <div className="sideBarCategories">
        <span>Categories</span>
        <span>Accessories</span>
        <span>Shirts</span>
        <span>Pants</span>
        <span>Jackets</span>
      </div>
      <hr style={{width:'calc(100% - 50px)'}}/>
      <div className="sideBarCategories" style={{flexGrow:1}}>
        <span>Personal</span>
        <span>Past Order</span>
        <span>Add Address</span>
      </div>
      <div className="sideBarLogout">
        Logout
      </div>
    </div>
  );
}

export default SideBar;
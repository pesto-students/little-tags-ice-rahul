import React, { useRef, useEffect, useContext } from 'react';
import FirebaseContext from '../Firebase/context';
import { connect } from 'react-redux';
import { ReactComponent as CrossIcon } from '../../global/assets/icons/icon-cross.svg';
import { ReactComponent as UserIcon } from '../../global/assets/icons/icon-user.svg';
import { Link } from 'react-router-dom';
import { DRAWER } from '../../constants';
import { setDrawerState } from '../../actions'
import './SideBar.scss';

const SideBar = ({ openDrawer = false, currentState, user, drawerPosition, setDrawerState}) => {
  const firebase = useContext(FirebaseContext);
  const sideBar = useRef(null);

  const toggleDrawer = (drawerState) => {
    const position = drawerState === DRAWER.OPEN ? '0px' : '-500px';
    setDrawerState(drawerState)
    sideBar.current.style.left=position;
  }

  useEffect(()=>{
    toggleDrawer(drawerPosition)
  // eslint-disable-next-line 
  },[drawerPosition])

  const handleGoogleSignIn = ()=> {
    if(!user){
      firebase
      .doGoogleSignIn()
      .then((authUser) => {
        console.log(authUser);
        firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          userName: authUser.user.displayName,
          roles: {}
        })
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      firebase.doSignOut();
    }
  }

  useEffect(() => {
    if(openDrawer) {
      toggleDrawer(DRAWER.OPEN);
      currentState(false);
    }
  // eslint-disable-next-line 
  },[openDrawer, currentState])

  return (
    <div className="SideBar" ref={sideBar}>
      <div className="titleBar">
        <span className="cursor-pointer cross-icon" onClick={() => toggleDrawer(DRAWER.CLOSE)}>
          <CrossIcon width="24px"/>
        </span>
        <span className="sideBarTitle cursor-pointer">
          <Link to="/" className="cursor-pointer decoration-none">Little Tags </Link>
        </span>
      </div>
      <div className="titleUser">
        {
          user ?
          <><UserIcon stroke="white" width="24px" height="24px" /><span>Hey, { user.userName }</span></>
          : ''
        }
      </div> 
      <div className="sideBarCategories">
        <span>Categories</span>
        <span><Link to="/product/Men's Clothing" className="cursor-pointer display-flex decoration-none flex-1">Men's Clothing</Link></span>
        <span><Link to="/product/Jewelery" className="cursor-pointer display-flex decoration-none flex-1">Jewelery</Link></span>
        <span><Link to="/product/Women's Clothing" className="cursor-pointer display-flex decoration-none flex-1">Women's Clothing</Link></span>
        <span><Link to="/product/Electronics" className="cursor-pointer display-flex decoration-none flex-1">Electronic Gadgets</Link></span>
      </div>
      <hr style={{width:'calc(100% - 50px)'}}/>
      <div className="sideBarCategories" style={{flexGrow:1}}>
        <span>Personal</span>
        <span><Link to="/past-orders" className="cursor-pointer display-flex decoration-none flex-1">Past Order</Link></span>
        <span><Link to="/add-address" className="cursor-pointer display-flex decoration-none flex-1">Add Address</Link></span>
      </div>
      <div className="sideBarLogout" onClick={handleGoogleSignIn}>
        {
          user ? 'Logout' : 'Login / Sign Up'
        }
        
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.sessionState.authUser,
  drawerPosition: state.drawerState.position
})

export default connect(mapStateToProps, { setDrawerState })(SideBar);
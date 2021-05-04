import React, { useContext } from 'react';
import { ReactComponent as LoginIcon } from '../../global/assets/icons/icon-login.svg';
import { ReactComponent as LogoutIcon } from '../../global/assets/icons/icon-logout.svg';
import { ReactComponent as CartIcon } from '../../global/assets/icons/icon-cart.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import FirebaseContext from '../Firebase/context';
import './Login.scss';

const Login = ({ fill, user, cart }) => {
  const firebase = useContext(FirebaseContext);
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
  return (
    <>
      {
        user ?
        <div className="Login">
          <span className="cartCount" attr-count={cart.length}><Link to="/cart"><CartIcon fill={fill} className="shoppingIcon"/></Link></span>
          <span className="loginText" onClick={handleGoogleSignIn}>
            Log Out
          </span>
          <LogoutIcon fill={fill} className="loginIcon" onClick={handleGoogleSignIn}/>
        </div> :
        <div className="Login" onClick={handleGoogleSignIn}>
          <span className="loginText">
            Log in / Sign up
          </span>
          <LoginIcon fill={fill} className="loginIcon"/>
        </div>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.sessionState.authUser,
  cart: state.cartState.cartItem,
})

export default connect(mapStateToProps)(Login);
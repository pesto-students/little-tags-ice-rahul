import React from 'react';
import { ReactComponent as LoginIcon } from '../../global/assets/icons/icon-login.svg';
import './Login.scss';

const Login = ({ fill }) => {
  return (
    <div className="Login">
      <span className="loginText">
        Log in / Sign up
      </span>
      <LoginIcon fill={fill} className="loginIcon"/>
    </div>
  )
}

export default Login;
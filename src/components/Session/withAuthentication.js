import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux';
import { setAuthUser } from '../../actions';
import FirebaseContext from '../Firebase/context'

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }

    const fallback = () => {
      localStorage.removeItem('authUser');
      props.setAuthUser(null);
    }

    const next = (authUser) => {
      saveToLocalStorage(authUser);
      props.setAuthUser(authUser);
    }

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('authUser'));
      props.setAuthUser(user);
      firebase.onAuthChangeListener(next, fallback)
    })
    return <Component {...props} />
  }
  return connect(null, { setAuthUser })(NewComponent);
}

export default withAuthentication;
import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux';
import FirebaseContext from '../Firebase/context'

const withAuthorization = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const fallback = () => {}

    const next = (authUser) => {}

    useEffect(()=>{
      firebase.onAuthChangeListener(next, fallback)
    })
    return props.authUser ? 
    <Component {...props} /> :
    <p className="text-center">You need to logged in to view this page</p>
  }

  const mapStateToProps = (state) => ({
    authUser: state.sessionState.authUser
  })
  return connect(mapStateToProps)(NewComponent);
}

export default withAuthorization;
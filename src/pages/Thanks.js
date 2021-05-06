import React from 'react'
import withAuthorization from '../components/Session/withAuthorization'

const Thanks = () => {
  return (
    <>
      Thanks For Placing the order
    </>
  )
}

export default withAuthorization(Thanks);
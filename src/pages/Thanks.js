import React from 'react'
import withAuthorization from '../components/Session/withAuthorization'
import { ReactComponent as ThanksIcon } from '../global/assets/icons/icon-thanks.svg'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

const Thanks = () => {
  const history = useHistory();
  return (
    <>
      <section className="product-list justify-center min-height-80-vh">
        <ThanksIcon />
        <div className="title-center">Thank you for shopping with us</div>
        <Button withIcon={false} text='Continue Shopping' variant="btn-light" onClick={() => history.push('/product')}/>
      </section>
    </>
  )
}

export default withAuthorization(Thanks);
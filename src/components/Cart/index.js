import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Cart = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="products-img"
        />
      </div>
    </>
  )
}
export default Cart

import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <div className="cart-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
                  alt="cart"
                  className="cart-img"
                />
              </div>
            ) : (
              <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <button
                  type="button"
                  className="remove-all-button"
                  onClick={onClickRemoveAllBtn}
                >
                  Remove All
                </button>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart

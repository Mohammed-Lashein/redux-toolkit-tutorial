import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { calculateTotalItemsCount, clearCart } from '../store/Cart/Cart.reducer'
import { useEffect } from 'react'

function CartContainer() {
  const {cartItems, total, amount} = useSelector((store) => store.mobilePhonesCart)  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotalItemsCount())
  }, [cartItems])

  if(amount < 1) {
    return <div className="cart">
      <header>
        <h2>your bag</h2>
        <h4 className='empty-cart'>is currently empty</h4>
      </header>
    </div>
  }
  
  return (
    <div className='cart'>
      <header>
      <h2>Your bag</h2>
      </header>
      {cartItems.map((item) => <CartItem key={item.id} {...item}/>)}
      <hr />
      <footer>
        <div className="cart-total">
          <h4>
            <span>
            Total
            </span>
            <span>
              ${total}
            </span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>clear cart</button>
      </footer>
    </div>
  )
}
export default CartContainer
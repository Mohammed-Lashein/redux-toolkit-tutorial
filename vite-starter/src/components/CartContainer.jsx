import { useSelector } from 'react-redux'
import CartItem from './CartItem'

function CartContainer() {
  // const {cartItems} = useSelector((store) => store.mobilePhonesCart)
  const {cartItems, total} = useSelector((store) => store.mobilePhonesCart)  
  
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
        <button className="btn clear-btn">clear cart</button>
      </footer>
    </div>
  )
}
export default CartContainer
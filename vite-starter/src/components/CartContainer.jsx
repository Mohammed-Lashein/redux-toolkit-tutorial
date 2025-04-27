import CartItem from './CartItem'

function CartContainer() {
  return (
    <div className='cart'>
      <h2>Your bag</h2>
      <footer>
        <div className="cart-total">
          <h4>
            <span>
            Total
            </span>
            <span>
              $ 0
            </span>
          </h4>
        </div>
      </footer>
    </div>
  )
}
export default CartContainer
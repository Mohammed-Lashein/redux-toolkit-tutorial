import { useDispatch } from 'react-redux'
import { ChevronDown, ChevronUp } from '../icons'
import { decreaseItemQty, increaseItemQty, removeItem } from '../store/Cart/Cart.reducer'

function CartItem({ title, price, img, amount, id }) {
  const dispatch = useDispatch()
	return (
		<article className='cart-item'>
			<img
				src={img}
				alt={title}
			/>
			<section>
				<h4>{title}</h4>
				<p className='item-price'>${price}</p>
				<button className='remove-btn' onClick={() => dispatch(removeItem(id))}>remove</button>
			</section>

			<section>
        <div>
          <button className="amount-btn" onClick={() => dispatch(increaseItemQty(id))}>
          <ChevronUp />
          </button>
          {/* At first, I put the amount in a span, this lead to a broken design
          since we needed an element of type block to make the chevrons appear
          in the expected view .  */}
          <p className='amount'>{amount}</p>
          <button className="amount-btn" onClick={() => dispatch(decreaseItemQty(id))}>
          <ChevronDown />
            </button>
        </div>
      </section>
		</article>
	)
}
export default CartItem

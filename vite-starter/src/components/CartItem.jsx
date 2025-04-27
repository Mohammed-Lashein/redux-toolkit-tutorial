import { ChevronDown, ChevronUp } from '../icons'

function CartItem({ title, price, img, amount }) {
	return (
		<article className='cart-item'>
			<img
				src={img}
				alt={title}
			/>
			<section>
				<h4>{title}</h4>
				<p className='item-price'>${price}</p>
				<button className='remove-btn'>remove</button>
			</section>

			<section>
        <div>
          <button className="amount-btn">
          <ChevronUp />
          </button>
          {/* At first, I put the amount in a span, this lead to a broken design
          since we needed an element of type block to make the chevrons appear
          in the expected view .  */}
          <p className='amount'>{amount}</p>
          <button className="amount-btn">
          <ChevronDown />
            </button>
        </div>
      </section>
		</article>
	)
}
export default CartItem

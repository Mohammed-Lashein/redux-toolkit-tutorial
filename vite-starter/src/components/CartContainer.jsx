import { useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { calculateTotalItemsCount, calculateTotalPrice, clearCart } from "../store/Cart/Cart.reducer"
import { useEffect } from "react"
import Modal from './Modal'
import { openModal } from '../store/Modal/Modal.reducer'

// should be extracted to a utils file, but since our application is small, there is no problem in
// leaving it here
function formatPrice(price) {
	return price.toFixed(2)
}

function CartContainer() {
  // selectors 
	const { cartItems, total, amount } = useSelector((store) => store.mobilePhonesCart)
  const {isModalOpened} = useSelector((store) => store.modalVisibility)
	const dispatch = useDispatch()  

  // calculate total price and items count
	useEffect(() => {
		dispatch(calculateTotalItemsCount())
		dispatch(calculateTotalPrice())
	}, [cartItems])

  function handleCartClearance() {
    dispatch(clearCart())
    dispatch(openModal())
  }

	if (amount < 1) {
		return (
			<div className='cart'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</div>
		)
	}

	return (
		<div className='cart'>
			<header>
				<h2>Your bag</h2>
			</header>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					{...item}
				/>
			))}
			<hr />
			<footer>
				<div className='cart-total'>
					<h4>
						<span>Total</span>
						<span>${formatPrice(total)}</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => handleCartClearance()}
				>
					clear cart
				</button>
			</footer>
      {isModalOpened && <Modal />}
		</div>
	)
}
export default CartContainer

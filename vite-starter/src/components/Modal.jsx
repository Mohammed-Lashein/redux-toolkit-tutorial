import { useDispatch } from "react-redux"
import { clearCart } from "../store/Cart/Cart.reducer"
import { closeModal } from "../store/Modal/Modal.reducer"

function Modal() {
	const dispatch = useDispatch()

	function handleCartClearance() {
		dispatch(clearCart())
		dispatch(closeModal())
	}
	return (
		<div className='modal-container'>
			<div className='modal'>
				<h4>Remove all items from your shopping cart ?</h4>
				<div className='btn-container'>
					{/* I swapped the styles because confirming deletion is supposed to be the danger action not the cancel */}
					<button
						className='btn clear-btn'
						onClick={() => handleCartClearance()}
					>
						confirm
					</button>
					<button
						className='btn confirm-btn'
						onClick={() => dispatch(closeModal())}
					>
						cancel
					</button>
				</div>
			</div>
		</div>
	)
}
export default Modal

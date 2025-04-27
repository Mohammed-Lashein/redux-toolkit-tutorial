function Modal() {
	return (
		<div className='modal-container'>
			<div className='modal'>
				<h4>Remove all items from your shopping cart ?</h4>
				<div className='btn-container'>
					{/* I swapped the styles because confirming deletion is supposed to be the danger action not the cancel */}
					<button className='btn clear-btn'>confirm</button>
					<button className='btn confirm-btn'>cancel</button>
				</div>
			</div>
		</div>
	)
}
export default Modal

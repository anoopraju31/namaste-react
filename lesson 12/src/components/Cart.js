import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../reducers/cartSlice'

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items)
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(clearCart())
	}

	return (
		<div className='max-w-3xl mx-auto py-6'>
			<h1 className='text-2xl font-bold text-center mb-4'> Cart </h1>

			<div className='my-6'>
				<ul className='sm:px-6 flex flex-col gap-4'>
					{cartItems?.map((item, idx) => (
						<CartItem
							key={idx}
							food={item.food}
							quantity={item.quantity}
							isBorderBottom={cartItems.length - 1 !== idx}
						/>
					))}
				</ul>
			</div>

			{cartItems.length === 0 && (
				<h2 className='text-xl text-center font-medium'> Cart is empty </h2>
			)}

			{cartItems.length !== 0 && (
				<div className='flex justify-end'>
					<button
						onClick={handleClear}
						className='px-6 py-2 bg-gray-200 text-xl font-medium rounded-lg'>
						clear
					</button>
				</div>
			)}
		</div>
	)
}

export default Cart

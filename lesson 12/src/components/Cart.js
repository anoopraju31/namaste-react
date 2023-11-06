import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../reducers/cartSlice'

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items)
	const dispatch = useDispatch()

	const handleClear = () => {
		dispatch(clearCart())
	}

	if (cartItems.length === 0)
		return (
			<div className='max-w-3xl h-96 mx-auto flex justify-center items-center'>
				<h1 className='text-3xl font-bold'> Cart is empty </h1>
			</div>
		)

	return (
		<div className='max-w-3xl mx-auto'>
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

			<div className='flex justify-end'>
				<button
					onClick={handleClear}
					className='px-6 py-2 bg-gray-200 text-xl font-medium rounded-lg'>
					clear
				</button>
			</div>
		</div>
	)
}

export default Cart

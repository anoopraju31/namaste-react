import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items)

	return (
		<div className='max-w-3xl mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-4'> Cart </h1>

			<div className=''>
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
		</div>
	)
}

export default Cart

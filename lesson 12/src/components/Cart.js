import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import CartItem from './CartItem'

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.items)

	return (
		<div className=''>
			<h1 className='text-2xl font-bold text-center mb-4'> Cart </h1>

			<div className=''>
				<ul className='sm:px-6 flex flex-col gap-4'>
					{cartItems?.map((item, idx) => (
						<CartItem key={item?.id} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Cart

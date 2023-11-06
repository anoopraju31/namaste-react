import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'
import AddCounter from './AddCounter'

const CartItem = ({ food, quantity, isBorderBottom }) => {
	const price = food?.defaultPrice ? food?.defaultPrice : food?.price

	return (
		<li
			className={`group flex justify-between px-6 py-3 sm:px-0 gap-4 ${
				isBorderBottom && ' border-b border-b-gray-300'
			}`}>
			<div className='w-28'>
				<img
					className='rounded-lg'
					src={IMAGE_CDN_URL + food?.imageId}
					alt=''
				/>
			</div>
			<div className='flex-1 text-xl flex flex-col justify-start'>
				<h3 className='font-medium mb-[2px]'> {food?.name} </h3>
				<p className='font-medium'> ₹{price / 100} </p>
			</div>

			<AddCounter food={food} quantity={quantity} />
		</li>
	)
}

export default CartItem

import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IMAGE_CDN_URL } from '../utills/constants'

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

			<div className='text-xl flex gap-4 justify-center items-center'>
				<button className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
					<AiOutlineMinus />
				</button>
				<p> {quantity} </p>
				<button className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
					<AiOutlinePlus />{' '}
				</button>
			</div>
		</li>
	)
}

export default CartItem

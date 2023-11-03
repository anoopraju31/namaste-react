import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'

const FoodCard = ({ food, isBorderBottom }) => {
	const price = food?.defaultPrice ? food?.defaultPrice : food?.price
	return (
		<li
			className={`flex flex-col-reverse sm:flex-row justify-between px-6 py-3 sm:px-0 gap-4 ${
				isBorderBottom && ' border-b border-b-gray-300'
			}`}>
			<div className='flex-1'>
				<h3 className='font-medium mb-[2px]'> {food?.name} </h3>
				<p className='font-medium'> ₹{price / 100} </p>
				<p className='text-xs my-2 text-gray-500'> {food?.description} </p>
			</div>

			<div className='w-full sm:w-28'>
				<img
					className='rounded-lg'
					src={IMAGE_CDN_URL + food?.imageId}
					alt=''
				/>
			</div>
		</li>
	)
}

export default FoodCard

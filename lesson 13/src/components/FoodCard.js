import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'
import { addItem } from '../reducers/cartSlice'
import { useDispatch } from 'react-redux'

const FoodCard = ({ food, isBorderBottom }) => {
	const price = food?.defaultPrice ? food?.defaultPrice : food?.price
	const dispatch = useDispatch()

	const handleAddItem = () => {
		dispatch(addItem(food))
	}

	return (
		<li
			className={`group flex justify-between items-center px-6 py-3 sm:px-0 gap-4 ${
				isBorderBottom && ' border-b border-b-gray-300'
			}`}>
			<div className='flex-1'>
				<h3 className='font-medium mb-[2px]'> {food?.name} </h3>
				<p className='font-medium'> ₹{price / 100} </p>
				<p className='text-xs my-2 text-gray-500'> {food?.description} </p>
			</div>

			<div className='w-28 relative'>
				<img
					className='rounded-lg'
					src={IMAGE_CDN_URL + food?.imageId}
					alt={food?.name}
				/>

				<div className='hidden group-hover:flex absolute top-0 left-0 right-0 bottom-0 bg-black/5 justify-center items-center'>
					<button
						data-testid={'add ' + food?.name}
						onClick={handleAddItem}
						className='bg-white text-xs flex justify-center items-center text-green-500 font-bold uppercase px-3 py-1 rounded-md'>
						add
					</button>
				</div>
			</div>
		</li>
	)
}

export default FoodCard

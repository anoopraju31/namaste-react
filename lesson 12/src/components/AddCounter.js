import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../reducers/cartSlice'

const AddCounter = ({ food, quantity }) => {
	const dispatch = useDispatch()

	const handleAdd = () => {
		dispatch(addItem(food))
	}

	const handleReomve = () => {
		dispatch(removeItem(food))
	}

	return (
		<div className='text-xl flex gap-4 justify-center items-center'>
			<button
				onClick={handleReomve}
				className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
				<AiOutlineMinus />
			</button>
			<p> {quantity} </p>
			<button
				onClick={handleAdd}
				className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
				<AiOutlinePlus />{' '}
			</button>
		</div>
	)
}

export default AddCounter

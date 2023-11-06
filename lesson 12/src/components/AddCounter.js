import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const AddCounter = ({ quantity }) => {
	return (
		<div className='text-xl flex gap-4 justify-center items-center'>
			<button className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
				<AiOutlineMinus />
			</button>
			<p> {quantity} </p>
			<button className='w-9 h-9 bg-gray-200 flex justify-center items-center rounded-md'>
				<AiOutlinePlus />{' '}
			</button>
		</div>
	)
}

export default AddCounter

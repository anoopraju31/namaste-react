import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import FoodCard from './FoodCard'

const RestaurantCategory = ({ data }) => {
	const [show, setShow] = useState(true)
	return (
		<div className=''>
			{/* Header */}
			<div
				onClick={() => setShow((prev) => !prev)}
				className='p-6 flex justify-between items-center text-xl text-zinc-800 cursor-pointer'>
				<h2 className='font-bold'> {data?.title} </h2>
				<div className=''>{show ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
			</div>

			{/* Body */}
			{show && (
				<ul className='sm:px-6 flex flex-col gap-4'>
					{data?.itemCards.map((item, idx) => (
						<FoodCard
							key={item?.card?.info?.id}
							food={item?.card?.info}
							isBorderBottom={data?.itemCards.length - 1 !== idx}
						/>
					))}
				</ul>
			)}
		</div>
	)
}

export default RestaurantCategory

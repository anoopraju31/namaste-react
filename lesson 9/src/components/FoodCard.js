import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'

const FoodCard = ({ food }) => {
	return (
		<div className='food-card'>
			<div>
				<img src={IMAGE_CDN_URL + food?.imageId} alt='' />
			</div>

			<div>
				<h3> {food?.name} </h3>
				<p> ₹{food.price / 100} </p>
			</div>
		</div>
	)
}

export default FoodCard

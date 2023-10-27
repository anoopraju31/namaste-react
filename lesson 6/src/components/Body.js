import React, { useState } from 'react'
import { RestaurantCard } from './'
import { restaurants } from '../utills/mockData'

const Body = () => {
	// React State Variable
	const [restaurantsList, setRestaurantsList] = useState(restaurants)

	return (
		<div className='body'>
			{/* <div className='search'> Search </div> */}
			<div className='filter'>
				<button
					className='filter-btn'
					onClick={() => {
						setRestaurantsList((prev) =>
							prev.filter((res) => res.info.avgRating >= 4),
						)
					}}>
					{' '}
					Top Rated Restuarants{' '}
				</button>

				<button
					className='filter-btn'
					onClick={() => {
						setRestaurantsList(restaurants)
					}}>
					{' '}
					Reset
				</button>
			</div>
			<div className='res-container'>
				{restaurantsList.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body

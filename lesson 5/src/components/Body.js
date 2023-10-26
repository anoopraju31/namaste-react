import React from 'react'
import { RestaurantCard } from './'

const Body = () => {
	return (
		<div className='body'>
			<div className='search'> Search </div>
			<div className='res-container'>
				{restaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body

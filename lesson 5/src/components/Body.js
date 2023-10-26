import React, { useState } from 'react'
import { RestaurantCard } from './'
import { restaurants } from '../utills/mockData'

const Body = () => {
	// Mormal JS Variable
	let listOfRestuarants = [
		{
			info: {
				id: '43835',
				name: 'KFC',
				cloudinaryImageId: 'bb7ae131544c7d37e10fc5faf76f09d6',
				costForTwo: '₹400 for two',
				cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
				avgRating: 4.2,
			},
		},
		{
			info: {
				id: '43836',
				name: "McDonald's",
				cloudinaryImageId: 'bb7ae131544c7d37e10fc5faf76f09d6',
				costForTwo: '₹400 for two',
				cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
				avgRating: 3.5,
			},
		},
		{
			info: {
				id: '43837',
				name: 'Dominos',
				cloudinaryImageId: 'bb7ae131544c7d37e10fc5faf76f09d6',
				costForTwo: '₹400 for two',
				cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
				avgRating: 4.1,
			},
		},
	]

	// React State Variable
	const [restaurants, setRestaurants] = useState(listOfRestuarants)

	return (
		<div className='body'>
			{/* <div className='search'> Search </div> */}
			<div className='filter'>
				<button
					className='filter-btn'
					onClick={() => {
						setRestaurants((prev) =>
							prev.filter((res) => res.info.avgRating >= 4),
						)
					}}>
					{' '}
					Top Rated Restuarants{' '}
				</button>
			</div>
			<div className='res-container'>
				{restaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body

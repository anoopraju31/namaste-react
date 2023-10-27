import React, { useEffect, useState } from 'react'
import { RestaurantCard, Shimmer } from './'
import { restaurants } from '../utills/mockData'

const Body = () => {
	// React State Variable
	const [restaurantsList, setRestaurantsList] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const res = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING',
		)
		const data = await res.json()

		setRestaurantsList(
			data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants,
		)

		// console.log(data)
	}

	// Conditional Rendering
	return restaurantsList.length === 0 ? (
		<Shimmer />
	) : (
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
				{restaurantsList?.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body

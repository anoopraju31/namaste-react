import React, { useEffect, useState } from 'react'
import { RestaurantCard, Shimmer } from './'
import { restaurants } from '../utills/mockData'
import { fetchUrl } from '../utills/constants'

const Body = () => {
	// React State Variable
	const [restaurantsList, setRestaurantsList] = useState([])
	const [searchText, setSearchText] = useState('')

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const res = await fetch(fetchUrl)
		const data = await res.json()

		setRestaurantsList(
			data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants,
		)
	}

	// Conditional Rendering
	return restaurantsList.length === 0 ? (
		<Shimmer />
	) : (
		<div className='body'>
			<div className='filter'>
				<div className='search'>
					<input
						type='text'
						className='search-box'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>

					<button
						onClick={() => {
							// filter the restuarant cards and update the UI
							// searchText
						}}>
						{' '}
						search{' '}
					</button>
				</div>
				<div className='search'>
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

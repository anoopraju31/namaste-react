import { useEffect, useState } from 'react'
import { useOnlineStatus, useRestuarantList } from '../src/hooks'
// import { RestaurantCard, Shimmer } from './'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {
	// React State Variable
	const restaurantsList = useRestuarantList()
	const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([])
	const [searchText, setSearchText] = useState('')
	const onlineStatus = useOnlineStatus()

	useEffect(() => {
		setFilteredRestaurantsList(restaurantsList)
	}, [restaurantsList])

	if (!onlineStatus)
		return (
			<h1>
				{' '}
				Looks like you are offline. Please check your internet connection!{' '}
			</h1>
		)

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
							const filtered = restaurantsList.filter(
								(res) =>
									res.info.name
										.toLowerCase()
										.includes(searchText.toLowerCase()) ||
									res.info.cuisines
										.join(', ')
										.toLowerCase()
										.includes(searchText.toLowerCase()),
							)

							console.log(filtered)
							setFilteredRestaurantsList(filtered)
						}}>
						{' '}
						search{' '}
					</button>
				</div>
				<div className='search'>
					<button
						className='filter-btn'
						onClick={() => {
							setFilteredRestaurantsList((prev) =>
								prev.filter((res) => res.info.avgRating >= 4),
							)
						}}>
						{' '}
						Top Rated Restuarants{' '}
					</button>

					<button
						className='filter-btn'
						onClick={() => {
							setFilteredRestaurantsList(restaurantsList)
						}}>
						{' '}
						Reset
					</button>
				</div>
			</div>
			<div className='res-container'>
				{filteredRestaurantsList?.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	)
}

export default Body

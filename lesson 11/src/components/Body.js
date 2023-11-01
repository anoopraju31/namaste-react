import { useEffect, useState } from 'react'
import { useOnlineStatus, useRestuarantList } from '../hooks'
// import { RestaurantCard, Shimmer } from './'
import RestaurantCard, { withVegLabel } from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {
	// React State Variable
	const restaurantsList = useRestuarantList()
	const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([])
	const [searchText, setSearchText] = useState('')
	const onlineStatus = useOnlineStatus()

	const VegRestaurantCard = withVegLabel(RestaurantCard)

	useEffect(() => {
		setFilteredRestaurantsList(restaurantsList)

		console.log(restaurantsList)
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
		<div className='body container mx-auto px-6'>
			<div className='filter flex '>
				<div className='search m-4 p-4'>
					<input
						type='text'
						className='border border-solid border-black'
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>

					<button
						className='px-4 py-2 bg-green-100 m-4 rounded-lg'
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
				<div className='search m-4 p-4 flex gap-2 items-center'>
					<button
						className='px-4 py-2 bg-gray-300 rounded-lg'
						onClick={() => {
							setFilteredRestaurantsList((prev) =>
								prev.filter((res) => res.info.avgRating >= 4),
							)
						}}>
						{' '}
						Top Rated Restuarants{' '}
					</button>

					<button
						className='px-4 py-2 bg-gray-300 rounded-lg'
						onClick={() => {
							setFilteredRestaurantsList(restaurantsList)
						}}>
						{' '}
						Reset
					</button>
				</div>
			</div>
			<div className='flex flex-wrap '>
				{filteredRestaurantsList?.map((restaurant) => {
					return restaurant.info.veg ? (
						<VegRestaurantCard key={restaurant.info.id} resData={restaurant} />
					) : (
						<RestaurantCard key={restaurant.info.id} resData={restaurant} />
					)
				})}
			</div>
		</div>
	)
}

export default Body

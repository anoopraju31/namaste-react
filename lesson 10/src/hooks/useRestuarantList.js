import { useEffect, useState } from 'react'
import { FETCH_URL } from '../utills/constants'

const useRestuarantList = () => {
	const [restaurantsList, setRestaurantsList] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		const res = await fetch(FETCH_URL)
		const data = await res.json()

		setRestaurantsList(
			data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants,
		)
	}

	return restaurantsList
}

export default useRestuarantList

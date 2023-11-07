import { useEffect, useState } from 'react'
import { RESTAURANT_INFO_URL } from '../utills/constants'

const useRestuarantInfo = (resId) => {
	const [restuarantInfo, setRestuarantInfo] = useState(null)

	useEffect(() => {
		fetchMenu(resId)
	}, [resId])

	const fetchMenu = async (resId) => {
		const res = await fetch(RESTAURANT_INFO_URL + resId)
		const data = await res.json()

		setRestuarantInfo(data?.data)
	}

	const info = restuarantInfo?.cards[0]?.card?.card?.info
	const categories = restuarantInfo?.cards
		.filter((card) => card?.groupedCard)[0]
		?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
			c.card?.card?.['@type'].includes(
				'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
			),
		)
	const licenseInfo = restuarantInfo?.cards
		.filter((card) => card?.groupedCard)[0]
		?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
			c.card?.card?.['@type'].includes(
				'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
			),
		)[0]
	const address = restuarantInfo?.cards
		.filter((card) => card?.groupedCard)[0]
		?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
			c.card?.card?.['@type'].includes(
				'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
			),
		)[0]

	return { info, categories, licenseInfo, address }
}

export default useRestuarantInfo

import React, { useEffect, useState } from 'react'
import { FoodCard, Shimmer } from './'
import { IMAGE_CDN_URL, RESTAURANT_INFO_URL } from '../utills/constants'

const ResturaantMenu = () => {
	const [restuarantInfo, setRestuarantInfo] = useState(null)

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async (id) => {
		// console.log(RESTAURANT_INFO_URL + id)
		const res = await fetch(RESTAURANT_INFO_URL)
		const data = await res.json()

		setRestuarantInfo(data?.data)
	}

	if (restuarantInfo === null) return <Shimmer />

	const { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
		restuarantInfo?.cards[0]?.card?.card?.info
	const { itemCards } =
		restuarantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
			?.card

	return (
		<div>
			<img src={IMAGE_CDN_URL + cloudinaryImageId} alt='' />
			<h1> {name} </h1>
			<p> {cuisines.join(', ')} </p>
			<p> {costForTwo} </p>
			<p> {avgRating} </p>
			<h2> Menu </h2>
			<h2> Recommended </h2>
			<ul className='food-container'>
				{itemCards?.map((item) => (
					<li key={item?.card?.info?.id}>
						<FoodCard food={item?.card?.info} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ResturaantMenu

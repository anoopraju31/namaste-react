import React, { useEffect, useState } from 'react'
import { Shimmer } from './'
import { IMAGE_CDN_URL } from '../utills/constants'

const ResturaantMenu = () => {
	const [restuarantInfo, setRestuarantInfo] = useState(null)

	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		const res = await fetch(
			'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=3241',
		)
		const data = await res.json()

		console.log(data)
		setRestuarantInfo(data?.data)
	}

	const { name, cuisines, cloudinaryImageId, costForTwo, avgRating } =
		restuarantInfo.cards[0]?.card?.card?.info

	return restuarantInfo === null ? (
		<Shimmer />
	) : (
		<div>
			<img src={IMAGE_CDN_URL + cloudinaryImageId} alt='' />
			<h1> {name} </h1>
			<p> {cuisines.join(', ')} </p>
			<p> {costForTwo} </p>
			<p> {avgRating} </p>
			<h2> Menu </h2>
			<ul>
				<li> Biryani </li>
				<li> Burgers </li>
				<li> Diet Coke </li>
			</ul>
		</div>
	)
}

export default ResturaantMenu

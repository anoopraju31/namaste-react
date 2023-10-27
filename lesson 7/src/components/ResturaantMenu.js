import React, { useEffect } from 'react'

const ResturaantMenu = () => {
	useEffect(() => {
		fetchMenu()
	}, [])

	const fetchMenu = async () => {
		const res = await fetch(
			'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=3241',
		)
		const data = await res.json()

		console.log(data)
	}

	return (
		<div>
			<h1> Name of restuarant </h1>
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

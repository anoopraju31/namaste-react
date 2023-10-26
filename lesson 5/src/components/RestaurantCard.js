import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'

const RestaurantCard = ({ resData }) => {
	const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
		resData.info

	const styleCard = {
		backgroundColor: '#fc4',
	}

	return (
		<div className='res-card' style={styleCard}>
			<img
				className='res-logo'
				src={IMAGE_CDN_URL + cloudinaryImageId}
				alt='res logo'
			/>
			<h3> {name} </h3>
			<h4> {cuisines.join(', ')} </h4>
			<h4> {avgRating} Stars </h4>
			<h4> {costForTwo} </h4>
		</div>
	)
}

export default RestaurantCard

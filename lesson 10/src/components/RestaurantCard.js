import React from 'react'
import { IMAGE_CDN_URL } from '../utills/constants'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ resData }) => {
	const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
		resData.info

	const styleCard = {
		backgroundColor: '#fc4',
	}

	return (
		<Link
			to={`/restuarant/${resData.info.id}`}
			className='m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200'
			style={styleCard}>
			<img
				className='rounded-lg'
				src={IMAGE_CDN_URL + cloudinaryImageId}
				alt='res logo'
			/>
			<h3 className='font-bold text-center py-4 text-lg'>{name}</h3>
			<h4 className='text-center'> {cuisines.join(', ')} </h4>
			<h4> {avgRating} Stars </h4>
			<h4> {costForTwo} </h4>
		</Link>
	)
}

export default RestaurantCard

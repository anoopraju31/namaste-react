import { useParams } from 'react-router-dom'
import { useRestuarantInfo } from '../hooks'
// import { FoodCard, Shimmer } from './'
import { IMAGE_CDN_URL } from '../utills/constants'
import FoodCard from './FoodCard'
import Shimmer from './Shimmer'
import { AiFillStar } from 'react-icons/ai'
import RestaurantCategory from './RestaurantCategory'

const ResturaantMenu = () => {
	const { id } = useParams()
	const restuarantInfo = useRestuarantInfo(id)

	if (restuarantInfo === null) return <Shimmer />

	const { name, cuisines, cloudinaryImageId, locality, costForTwo, avgRating } =
		restuarantInfo?.cards[0]?.card?.card?.info
	const categories =
		restuarantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(c) =>
				c.card?.card?.['@type'].includes(
					'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
				),
		)

	// console.log(categories)
	console.log(restuarantInfo)

	return (
		<div className='max-w-5xl mx-auto'>
			<div className='p-6 flex justify-between border-b border-b-gray-300'>
				<div className='flex flex-col text-gray-600 font-bold text-sm gap-1'>
					<h1 className='text-3xl text-slate-800'> {name} </h1>

					<p> {cuisines.join(', ')} </p>
					<p> {locality} </p>
				</div>

				<div className=''>
					<div className='flex gap-2 items-center text-lg text-green-500 font-medium'>
						<AiFillStar />
						<p> {avgRating} </p>
					</div>
				</div>
			</div>

			<div>
				{categories?.map((category) => (
					<RestaurantCategory
						key={category?.card?.card?.title}
						data={category?.card?.card}
					/>
				))}
			</div>
		</div>
	)
}

export default ResturaantMenu

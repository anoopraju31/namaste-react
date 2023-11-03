import { useParams } from 'react-router-dom'
import { useRestuarantInfo } from '../hooks'
import { AiFillStar } from 'react-icons/ai'
import { FaLocationDot } from 'react-icons/fa6'
import RestaurantCategory from './RestaurantCategory'
// import { IMAGE_URL } from '../utills/constants'

const ResturaantMenu = () => {
	const { id } = useParams()
	const restuarantInfo = useRestuarantInfo(id)

	if (restuarantInfo === null) return <div />

	const {
		name,
		cuisines,
		cloudinaryImageId,
		locality,
		costForTwo,
		avgRating,
		totalRatingsString,
	} = restuarantInfo?.cards[0]?.card?.card?.info
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

	return (
		<div className='max-w-5xl mx-auto'>
			<div className='mx-6 py-6 flex justify-between border-b border-b-gray-400'>
				<div className='flex flex-col text-gray-600 font-bold text-sm gap-1'>
					<h1 className='text-3xl text-slate-800'> {name} </h1>

					<p> {cuisines.join(', ')} </p>
					<p> {locality} </p>
				</div>

				<div className='flex flex-col items-center gap-1'>
					<div className='w-fit flex gap-2 items-center text-lg text-green-500 font-medium'>
						<AiFillStar />
						<p> {avgRating} </p>
					</div>

					<p className='text-xs text-gray-600 font-bold'>
						{totalRatingsString}
					</p>
				</div>
			</div>

			<section>
				{categories?.map((category) => (
					<RestaurantCategory
						key={category?.card?.card?.title}
						data={category?.card?.card}
					/>
				))}
			</section>

			<section className='mb-20 p-6 flex flex-col gap-4 text-sm text-gray-400'>
				<div className='pb-4 flex items-center gap-6 border-b border-b-gray-400'>
					<img
						className='w-16'
						src={
							'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/' +
							licenseInfo?.card?.card?.imageId
						}
						alt=''
					/>
					<p className='font-medium'> {licenseInfo?.card?.card?.text[0]} </p>
				</div>
				<div className=''>
					<div className='mb-4'>
						<h5 className='font-bold'> {address?.card?.card?.name} </h5>
						<p className='text-xs'> (Outlet: {address?.card?.card?.area}) </p>
					</div>
					<div className='flex items-center gap-2 text-xs'>
						<FaLocationDot />
						<p> {address?.card?.card?.completeAddress} </p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ResturaantMenu

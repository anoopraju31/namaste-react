import React from 'react'
import ReactDOM from 'react-dom/client'

const restaurants = [
	{
		id: '3241',
		name: 'Meghana Foods',
		cloudinaryImageId: 'e0vvulfbahjxjz6k4uwi',
		locality: 'Residency Road',
		areaName: 'Residency Road',
		costForTwo: '₹500 for two',
		cuisines: [
			'Biryani',
			'Andhra',
			'South Indian',
			'North Indian',
			'Chinese',
			'Seafood',
		],
		avgRating: 4.5,
		feeDetails: {
			restaurantId: '3241',
			fees: [
				{
					name: 'BASE_DISTANCE',
					fee: 3700,
				},
				{
					name: 'BASE_TIME',
				},
				{
					name: 'ANCILLARY_SURGE_FEE',
				},
			],
			totalFee: 3700,
		},
		parentId: '635',
		avgRatingString: '4.5',
		totalRatingsString: '10K+',
		sla: {
			deliveryTime: 21,
			lastMileTravel: 2.3,
			serviceability: 'SERVICEABLE',
			slaString: '21 mins',
			lastMileTravelString: '2.3 km',
			iconType: 'ICON_TYPE_EMPTY',
		},
		availability: {
			nextCloseTime: '2023-10-26 01:30:00',
			opened: true,
		},
		badges: {},
		isOpen: true,
		type: 'F',
		badgesV2: {
			entityBadges: {
				imageBased: {},
				textBased: {},
				textExtendedBadges: {},
			},
		},
		aggregatedDiscountInfoV3: {
			header: '₹150 OFF',
			subHeader: 'ABOVE ₹349',
			discountTag: 'FLAT DEAL',
		},
		orderabilityCommunication: {
			title: {},
			subTitle: {},
			message: {},
			customIcon: {},
		},
		differentiatedUi: {
			displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
			differentiatedUiMediaDetails: {
				mediaType: 'ADS_MEDIA_ENUM_IMAGE',
				lottie: {},
				video: {},
			},
		},
		reviewsSummary: {},
		displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		restaurantOfferPresentationInfo: {},
	},
	{
		id: '48230',
		name: 'Kanti Sweets',
		cloudinaryImageId: 'u0hhfifwmpsnobytv2yf',
		locality: 'Brigade Road',
		areaName: 'Brigade Road',
		costForTwo: '₹150 for two',
		cuisines: ['Sweets'],
		avgRating: 4.5,
		veg: true,
		feeDetails: {
			restaurantId: '48230',
			fees: [
				{
					name: 'BASE_DISTANCE',
					fee: 3700,
				},
				{
					name: 'BASE_TIME',
				},
				{
					name: 'ANCILLARY_SURGE_FEE',
				},
			],
			totalFee: 3700,
		},
		parentId: '4700',
		avgRatingString: '4.5',
		totalRatingsString: '1K+',
		sla: {
			deliveryTime: 22,
			lastMileTravel: 1.8,
			serviceability: 'SERVICEABLE',
			slaString: '22 mins',
			lastMileTravelString: '1.8 km',
			iconType: 'ICON_TYPE_EMPTY',
		},
		availability: {
			nextCloseTime: '2023-10-25 22:00:00',
			opened: true,
		},
		badges: {
			imageBadges: [
				{
					imageId: 'v1695133679/badges/Pure_Veg111.png',
					description: 'pureveg',
				},
			],
		},
		isOpen: true,
		type: 'F',
		badgesV2: {
			entityBadges: {
				imageBased: {
					badgeObject: [
						{
							attributes: {
								description: 'pureveg',
								imageId: 'v1695133679/badges/Pure_Veg111.png',
							},
						},
					],
				},
				textBased: {},
				textExtendedBadges: {},
			},
		},
		aggregatedDiscountInfoV3: {
			header: '₹150 OFF',
			subHeader: 'ABOVE ₹349',
			discountTag: 'FLAT DEAL',
		},
		orderabilityCommunication: {
			title: {},
			subTitle: {},
			message: {},
			customIcon: {},
		},
		differentiatedUi: {
			displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
			differentiatedUiMediaDetails: {
				mediaType: 'ADS_MEDIA_ENUM_IMAGE',
				lottie: {},
				video: {},
			},
		},
		reviewsSummary: {},
		displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
		restaurantOfferPresentationInfo: {},
	},
]

const Header = () => (
	<div className='header'>
		<div className='logo-container'>
			<img
				className='logo'
				src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf='
				alt='logo'
			/>
		</div>

		<div className='nav-items'>
			<ul>
				<li> Home </li>
				<li> About Us </li>
				<li> Contact Us </li>
				<li> Cart </li>
			</ul>
		</div>
	</div>
)

const styleCard = {
	backgroundColor: '#fc4',
}

const RestaurantCard = ({ resData }) => {
	const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } = resData
	return (
		<div className='res-card' style={styleCard}>
			<img
				className='res-logo'
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
				alt='res logo'
			/>
			<h3> {name} </h3>
			<h4> {cuisines.join(', ')} </h4>
			<h4> {avgRating} Stars </h4>
			<h4> {costForTwo} </h4>
		</div>
	)
}

const Body = () => (
	<div className='body'>
		<div className='search'> Search </div>
		<div className='res-container'>
			<RestaurantCard resData={restaurants[0]} />
			<RestaurantCard resData={restaurants[1]} />
		</div>
	</div>
)

const AppLayout = () => (
	<div className='app'>
		<Header />
		<Body />
	</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppLayout />)

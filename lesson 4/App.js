import React from 'react'
import ReactDOM from 'react-dom/client'

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

const RestaurantCard = () => (
	<div className='res-card' style={styleCard}>
		<img
			className='res-logo'
			src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi'
			alt='res logo'
		/>
		<h3> Meghana Foods </h3>
		<h4> Biryani, North Indian, Asian </h4>
		<h4> 4.4 Stars </h4>
		<h4> 38 mins </h4>
	</div>
)

const Body = () => (
	<div className='body'>
		<div className='search'> Search </div>
		<div className='res-container'>
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
			<RestaurantCard />
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

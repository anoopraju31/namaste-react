import React from 'react'

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

export default Header

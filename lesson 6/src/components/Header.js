import React from 'react'
import { LOGO_URL } from '../utills/constants'

const Header = () => (
	<div className='header'>
		<div className='logo-container'>
			<img className='logo' src={LOGO_URL} alt='logo' />
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

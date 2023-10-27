import React, { useState } from 'react'
import { LOGO_URL } from '../utills/constants'

const Header = () => {
	const [btnName, setBtnName] = useState('Login')

	console.log('Header Component!')

	return (
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
					<li>
						<button
							onClick={() => {
								setBtnName((prev) => (prev === 'login' ? 'Logout' : 'login'))
							}}
							className='login-button'>
							{btnName}
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header

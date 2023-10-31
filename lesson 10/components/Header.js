import React, { useState } from 'react'
import { LOGO_URL } from '../utills/constants'
import { Link } from 'react-router-dom'
import { useOnlineStatus } from '../hooks'

const Header = () => {
	const [btnName, setBtnName] = useState('Login')
	const onlineStatus = useOnlineStatus()

	// console.log('Header Component!')

	return (
		<div className='header'>
			<div className='logo-container'>
				<img className='logo' src={LOGO_URL} alt='logo' />
			</div>

			<div className='nav-items'>
				<ul>
					<li>Online Status: {onlineStatus ? '✅' : '❌'} </li>
					<li>
						<Link to='/'> Home </Link>
					</li>
					<li>
						<Link to='/about'> About Us </Link>
					</li>
					<li>
						<Link to='/contact'> Contact Us </Link>
					</li>
					<li>
						<Link to='/grocery'> Grocery </Link>
					</li>
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

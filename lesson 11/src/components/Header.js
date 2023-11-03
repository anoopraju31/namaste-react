import React, { useState } from 'react'
import { LOGO_URL } from '../utills/constants'
import { Link } from 'react-router-dom'
import { useOnlineStatus } from '../hooks'

const Header = () => {
	const [btnName, setBtnName] = useState('Login')
	const [navOpen, setNavOpen] = useState(false)
	const onlineStatus = useOnlineStatus()

	// console.log('Header Component!')

	return (
		<div className='max-w-6xl mx-auto flex justify-between px-3 sm:px-6'>
			<div className='logo-container'>
				<img className='h-14  object-contain' src={LOGO_URL} alt='logo' />
			</div>

			<div className='relative flex items-center'>
				<ul
					className={`w-72 lg:w-full absolute lg:static ${
						navOpen ? 'top-16 right-0' : '-top-[100vh] right-0'
					} flex flex-col lg:flex-row gap-6 p-6 rounded-lg bg-green-500 lg:bg-transparent transition-all duration-500 ease-in-out`}>
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

				<button
					onClick={() => setNavOpen((prev) => !prev)}
					className='w-10 h-10 rounded-md bg-slate-500 flex lg:hidden justify-center items-center'></button>
			</div>
		</div>
	)
}

export default Header

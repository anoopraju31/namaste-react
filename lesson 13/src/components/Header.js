import React, { useContext, useState } from 'react'
import { LOGO_URL } from '../utills/constants'
import { Link } from 'react-router-dom'
import { useOnlineStatus } from '../hooks'
import { FaCartShopping } from 'react-icons/fa6'
import UserContext from '../context/UserContext'
import { useSelector } from 'react-redux'

const Header = () => {
	const [btnName, setBtnName] = useState('Login')
	const [navOpen, setNavOpen] = useState(false)
	const onlineStatus = useOnlineStatus()
	const { loggedInUser } = useContext(UserContext)

	// Subscribing to the store using a selector
	const cartQuantity = useSelector((state) => state.cart.quantity)

	return (
		<div className='max-w-6xl mx-auto flex justify-between px-3 sm:px-6'>
			<div className='logo-container'>
				<img className='h-14  object-contain' src={LOGO_URL} alt='logo' />
			</div>

			<div className='relative flex items-center'>
				<ul
					className={`w-72 lg:w-full absolute lg:static ${
						navOpen ? 'top-16 right-0' : '-top-[100vh] right-0'
					} flex flex-col lg:flex-row gap-6 p-6 rounded-lg bg-green-500 lg:bg-transparent transition-all duration-500 ease-in-out z-50`}>
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
					<li>
						<Link
							to='/cart'
							className='px-4 font-bold relative flex items-center'>
							<FaCartShopping />
							<span className='sr-only'>cart</span>
							<span className='absolute -top-2 right-1'>{cartQuantity}</span>
						</Link>
					</li>
					<li>
						<button
							onClick={() => {
								setBtnName((prev) => (prev === 'Login' ? 'Logout' : 'Login'))
							}}
							className='login-button'>
							{btnName}
						</button>
					</li>
					<li className='font-bold'> {loggedInUser} </li>
				</ul>

				<button
					onClick={() => setNavOpen((prev) => !prev)}
					className='w-10 h-10 rounded-md bg-slate-500 flex lg:hidden justify-center items-center'></button>
			</div>
		</div>
	)
}

export default Header

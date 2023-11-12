import React from 'react'
import { LOGO_IMG, USER_AVATAR } from '../utills/constants'
import { signOut } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate('/')
			})
			.catch((error) => {
				navigate('/error')
			})
	}
	return (
		<header className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between'>
			<div className=''>
				<img className='w-36 sm:w-44' src={LOGO_IMG} alt='logo' />
			</div>

			<div className='flex'>
				<img className='w-12 h-12' src={USER_AVATAR} alt='user avatar' />

				<button onClick={handleSignOut} className='font-bold text-white'>
					{' '}
					Sign Out{' '}
				</button>
			</div>
		</header>
	)
}

export default Header

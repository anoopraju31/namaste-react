import React from 'react'
import { LOGO_IMG } from '../utills/constants'

const Header = () => {
	return (
		<div className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
			<img className='w-36 sm:w-44' src={LOGO_IMG} alt='logo' />
		</div>
	)
}

export default Header

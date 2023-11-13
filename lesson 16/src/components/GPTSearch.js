import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { LOGIN_BG } from '../utills/constants'

const GPTSearch = () => {
	return (
		<div className='relative'>
			<section className='fixed top-0 left-0 right-0 w-full h-screen'>
				<img
					className='w-full h-full object-cover'
					src={LOGIN_BG}
					alt='login background'
				/>
			</section>
			<section className='relative w-full min-h-screen z-20 bg-black/50'>
				<GPTSearchBar />
				<GPTMovieSuggestions />
			</section>
		</div>
	)
}

export default GPTSearch

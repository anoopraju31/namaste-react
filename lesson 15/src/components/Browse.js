import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utills/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../reducers/movieSlices'

const Browse = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		getNowPlayingMovies()
	}, [])

	const getNowPlayingMovies = async () => {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/now_playing?page=1',
			API_OPTIONS,
		)
		const data = await res.json()

		dispatch(addNowPlayingMovies(data.results))

		console.log(data)
	}

	return (
		<main>
			<Header />
		</main>
	)
}

export default Browse

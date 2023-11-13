import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utills/constants'
import { addTrendingMovies } from '../reducers/movieSlices'

const useTrendingMovies = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		getTrendingMovies()
	}, [])

	const getTrendingMovies = async () => {
		const res = await fetch(
			'https://api.themoviedb.org/3/trending/movie/day',
			API_OPTIONS,
		)
		const data = await res.json()

		dispatch(addTrendingMovies(data.results))
	}
}

export default useTrendingMovies

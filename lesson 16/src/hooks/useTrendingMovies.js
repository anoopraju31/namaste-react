import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utills/constants'
import { addTrendingMovies } from '../reducers/movieSlices'

const useTrendingMovies = () => {
	const trendingMovies = useSelector((state) => state.movies.trendingMovies)
	const dispatch = useDispatch()

	useEffect(() => {
		!trendingMovies && getTrendingMovies()
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

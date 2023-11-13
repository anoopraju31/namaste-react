import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utills/constants'
import { addPopularMovies } from '../reducers/movieSlices'

const usePopularMovies = () => {
	const popularMovies = useSelector((state) => state.movies.popularMovies)
	const dispatch = useDispatch()

	useEffect(() => {
		!popularMovies && getPopularMovies()
	}, [])

	const getPopularMovies = async () => {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/popular?page=1',
			API_OPTIONS,
		)
		const data = await res.json()

		dispatch(addPopularMovies(data.results))
	}
}

export default usePopularMovies

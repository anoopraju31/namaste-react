import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utills/constants'
import { addTopRatedMovies } from '../reducers/movieSlices'

const useTopRatedMovies = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		getTopRatedMovies()
	}, [])

	const getTopRatedMovies = async () => {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated?page=1',
			API_OPTIONS,
		)
		const data = await res.json()

		dispatch(addTopRatedMovies(data.results))
	}
}

export default useTopRatedMovies

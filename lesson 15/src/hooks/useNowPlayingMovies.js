import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utills/constants'
import { addNowPlayingMovies } from '../reducers/movieSlices'

const useNowPlayingMovies = () => {
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

		// console.log(data)
	}
}

export default useNowPlayingMovies

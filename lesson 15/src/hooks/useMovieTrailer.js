import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS, TMDB_MOVIE_VIDEO_API } from '../utills/constants'
import { addTrailerVideo } from '../reducers/movieSlices'

const useMovieTrailer = (movieId) => {
	const dispatch = useDispatch()

	const getMovieVideos = async (movieId) => {
		const res = await fetch(TMDB_MOVIE_VIDEO_API(movieId), API_OPTIONS)
		const data = await res.json()
		const filteredData = data?.results?.filter(
			(video) => video?.type === 'Trailer',
		)

		const trailer = filteredData.length ? filteredData[0] : data?.results[0]

		dispatch(addTrailerVideo(trailer))
	}

	useEffect(() => {
		getMovieVideos(movieId)
	}, [movieId])
}

export default useMovieTrailer

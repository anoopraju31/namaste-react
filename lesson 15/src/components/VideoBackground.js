import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { IMG_CDN_URL } from '../utills/constants'

const VideoBackground = ({ movieId }) => {
	useMovieTrailer(movieId)
	const trailer = useSelector((state) => state?.movies?.trailerVideo)

	return (
		<div className=''>
			<iframe
				className='w-full aspect-video hidden'
				src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1&loop=1&controls=0&rel=0&showinfo=0&disablekb=1`}
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
		</div>
	)
}

export default VideoBackground

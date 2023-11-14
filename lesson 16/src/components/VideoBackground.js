import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
import {
	IMG_CDN_URL,
	YOUTUBE_FEATURES,
	YOUTUBE_VIDEO_URL,
} from '../utills/constants'

const VideoBackground = ({ movieId, img }) => {
	const trailer = useSelector((state) => state?.movies?.trailerVideo)
	useMovieTrailer(movieId)

	return (
		<div className='absolute sm:relative top-0 w-full'>
			{/* Screen >= 650px Youtube video player */}
			<iframe
				className='w-full aspect-video hidden sm:block'
				src={YOUTUBE_VIDEO_URL(trailer?.key)}
				title='YouTube video player'
				allow={YOUTUBE_FEATURES}></iframe>

			{/* Screen < 650px Movie Poster*/}
			<div className='w-full sm:hidden'>
				<img className='w-full aspect-video' src={IMG_CDN_URL + img} alt='' />
			</div>
		</div>
	)
}

export default VideoBackground

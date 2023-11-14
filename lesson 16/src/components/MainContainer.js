import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
	const movies = useSelector((state) => state.movies?.nowPlayingMovies)

	if (!movies) return

	const mainMovie = movies[0]
	const { original_title, overview, id, backdrop_path } = mainMovie

	return (
		<section className='relative z-10'>
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} img={backdrop_path} />
		</section>
	)
}

export default MainContainer

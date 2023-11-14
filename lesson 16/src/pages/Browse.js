import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'

const Browse = () => {
	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useTrendingMovies()

	return (
		<main className='max-w-[1536px] min-h-screen mx-auto bg-black'>
			<MainContainer />
			<SecondaryContainer />
		</main>
	)
}

export default Browse

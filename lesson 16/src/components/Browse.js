import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import GPTSearch from './GPTSearch'

const Browse = () => {
	useNowPlayingMovies()
	usePopularMovies()
	useTopRatedMovies()
	useTrendingMovies()

	return (
		<main className='bg-black min-h-screen'>
			<div className='max-w-[1536px] mx-auto'>
				<Header />
				<GPTSearch />
				<MainContainer />
				<SecondaryContainer />
				{/* 
				Main Video Container
					- Video Background
					- Video title
				Secondary Container
					- Movie List * n
						- Cards * n
			*/}
			</div>
		</main>
	)
}

export default Browse

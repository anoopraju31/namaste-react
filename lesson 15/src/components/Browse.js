import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
	useNowPlayingMovies()
	usePopularMovies()

	return (
		<main className='bg-black min-h-screen'>
			<div className='max-w-[1536px] mx-auto'>
				<Header />
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

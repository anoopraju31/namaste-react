import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
	useNowPlayingMovies()

	return (
		<main>
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
		</main>
	)
}

export default Browse

import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'

const Browse = () => {
	useNowPlayingMovies()

	return (
		<main>
			<Header />
			<MainContainer />
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

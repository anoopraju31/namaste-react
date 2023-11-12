import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
	useNowPlayingMovies()

	return (
		<main>
			<Header />
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

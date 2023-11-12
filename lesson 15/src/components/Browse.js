import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
	useNowPlayingMovies()

	return (
		<main>
			<Header />
		</main>
	)
}

export default Browse

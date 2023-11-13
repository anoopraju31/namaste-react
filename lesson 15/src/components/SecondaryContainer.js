import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector(
		(state) => state?.movies?.nowPlayingMovies,
	)
	return (
		<section className='h-screen'>
			<MovieList title='Now Playing' movies={nowPlayingMovies} />

			{/* 
			MovieList - Popular
				- MovieCard - n
			MovieList - Now Playing
			MovieList - Trending
			MovieList - Horror
			MovieList - Comedy
		*/}
		</section>
	)
}

export default SecondaryContainer

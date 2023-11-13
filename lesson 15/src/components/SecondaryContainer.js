import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector(
		(state) => state?.movies?.nowPlayingMovies,
	)
	return (
		<section className=''>
			<MovieList title='Now Playing' movies={nowPlayingMovies} />
			<MovieList title='Trending' movies={nowPlayingMovies} />
			<MovieList title='Popular' movies={nowPlayingMovies} />
			<MovieList title='Horror' movies={nowPlayingMovies} />
			<MovieList title='Comedy' movies={nowPlayingMovies} />

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

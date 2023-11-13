import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector(
		(state) => state?.movies?.nowPlayingMovies,
	)
	return (
		<section className='relative w-full md:-top-10 lg:-top-28 z-50'>
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

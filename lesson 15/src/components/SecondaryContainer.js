import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
	const nowPlayingMovies = useSelector(
		(state) => state?.movies?.nowPlayingMovies,
	)
	const popularMovies = useSelector((state) => state.movies.popularMovies)
	const topRatedMovies = useSelector((state) => state.movies.topRatedMovies)

	return (
		<section className='relative w-full md:-top-10 lg:-top-28 xl:-top-36 z-50'>
			<MovieList title='Now Playing' movies={nowPlayingMovies} />
			<MovieList title='Top Rated' movies={topRatedMovies} />
			<MovieList title='Popular' movies={popularMovies} />
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

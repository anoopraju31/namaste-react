import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
	if (!movies) return

	return (
		<div className='text-white'>
			<div className=''>
				<h2> {title} </h2>
			</div>

			<div className=''>
				<MovieCard poster={movies[0].poster_path} />
			</div>
		</div>
	)
}

export default MovieList

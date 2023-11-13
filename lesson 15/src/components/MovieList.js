import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
	if (!movies) return

	return (
		<div className='text-white'>
			<div className='p-4'>
				<h2 className='text-xl font-bold'> {title} </h2>
			</div>

			<div className='w-full px-4  flex gap-4 overflow-x-auto scrollbar'>
				{movies?.map((movie) => (
					<MovieCard key={movie.id} poster={movie?.poster_path} />
				))}
			</div>
		</div>
	)
}

export default MovieList

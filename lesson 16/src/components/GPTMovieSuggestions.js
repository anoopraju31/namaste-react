import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GPTMovieSuggestions = () => {
	const { searchText, moviesNames, movieResults } = useSelector(
		(state) => state.gpt,
	)

	if (!moviesNames) return null

	return (
		<section className='p-4 md:mt-10 lg:mt-16'>
			<h1 className='mb-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white'>
				{' '}
				Search result for "{searchText}"{' '}
			</h1>
			<div className='w-fit mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
				{movieResults?.map((movie) => (
					<MovieCard key={movie.id} poster={movie?.poster_path} />
				))}
			</div>
		</section>
	)
}

export default GPTMovieSuggestions

import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GPTMovieSuggestions = () => {
	const { moviesNames, movieResults } = useSelector((state) => state.gpt)

	if (!moviesNames) return null

	return (
		<section className='w-fit mx-auto p-4 mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4'>
			{movieResults?.map((movie) => (
				<MovieCard key={movie.id} poster={movie?.poster_path} />
			))}
		</section>
	)
}

export default GPTMovieSuggestions

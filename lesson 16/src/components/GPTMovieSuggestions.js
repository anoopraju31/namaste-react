import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const GPTMovieSuggestions = () => {
	const { moviesNames, movieResults } = useSelector((state) => state.gpt)

	if (!moviesNames) return null

	return (
		<section className='max-w-7xl mx-auto p-4 mt-16 flex flex-wrap justify-between gap-4'>
			{movieResults?.map((movie) => (
				<MovieCard key={movie.id} poster={movie?.poster_path} />
			))}
		</section>
	)
}

export default GPTMovieSuggestions

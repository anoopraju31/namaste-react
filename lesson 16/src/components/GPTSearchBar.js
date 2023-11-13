import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import languages from '../utills/languageConstants'
import openai from '../utills/openai'
import { API_OPTIONS } from '../utills/constants'
import { addGPTMovieResults } from '../reducers/GPTSlice'

const GPTSearchBar = () => {
	const selectedLanguage = useSelector((state) => state.config.language)
	const searchRef = useRef(null)
	const dispatch = useDispatch()

	// search movie in TMDB
	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			'https://api.themoviedb.org/3/search/movie?query=' +
				movie +
				'&include_adult=false&language=en-US&page=1',
			API_OPTIONS,
		)
		const json = await data.json()

		return json.results
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const searchText = searchRef.current.value

		if (!searchText) return

		const gptQuery =
			'Act as a Movie Recommendation System and suggest some movies for the query : ' +
			searchText +
			'. only give me names of 5 movies, coma seperated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya'

		// * Make an API call to openai and get Movie results
		const gptResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-3.5-turbo',
		})

		// ! Error Handling
		if (!gptResults.choices) return

		// * [movie1, movie2, movie3, movie4, movie5]
		const gptMovies = gptResults.choices?.[0]?.message?.content.split(',')

		// * For each movie search in TMDB API
		const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))

		// * [Promise, Promise, Promise, Promise, Promise]
		const tmdbResults = await Promise.all(promiseArray)

		dispatch(
			addGPTMovieResults({
				searchText,
				movieNames: gptMovies,
				movieResults: tmdbResults,
			}),
		)

		searchRef.current.value = ''
	}

	return (
		<div className='py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40 flex flex-col items-center'>
			<form
				className='flex-shrink-0 p-4 w-full flex justify-center'
				onSubmit={handleSubmit}>
				<input
					type='text'
					ref={searchRef}
					className='w-full max-w-2xl p-3 sm:p-4 rounded-tl-xl rounded-bl-xl text-gray-900 text-sm sm:text-base sm:font-medium outline-none'
					placeholder={languages[selectedLanguage].placeholder}
				/>
				<button
					type='submit'
					className='py-3 sm:py-4 px-4 sm:px-6 bg-red-600 outline-none border-none text-white rounded-tr-xl rounded-br-xl text-sm sm:text-base sm:font-medium'>
					{languages[selectedLanguage].search}
				</button>
			</form>
		</div>
	)
}

export default GPTSearchBar

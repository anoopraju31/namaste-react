import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import openai from '../utills/openai'
import { API_OPTIONS, GET_GPT_QUERY } from '../utills/constants'
import { addGPTMovieResults } from '../reducers/GPTSlice'

const useGPTMovieSearch = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const searchRef = useRef(null)
	const dispatch = useDispatch()

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

	const handleSearch = async (e) => {
		e.preventDefault()

		const searchText = searchRef.current.value

		if (!searchText) return

		try {
			setLoading(true)

			const gptQuery = GET_GPT_QUERY(searchText)

			// * Make an API call to openai and get Movie results
			const gptResults = await openai.chat.completions.create({
				messages: [{ role: 'user', content: gptQuery }],
				model: 'gpt-3.5-turbo',
			})

			// ! Error Handling
			if (!gptResults.choices) {
				setError('No Result found!')
				return
			}

			// * [movie1, movie2, movie3, movie4, movie5]
			const movieNames = gptResults.choices?.[0]?.message?.content.split(',')

			// * For each movie search in TMDB API
			const promiseArray = movieNames.map((movie) => searchMovieTMDB(movie))

			// * [Promise, Promise, Promise, Promise, Promise]
			const tmdbResults = await Promise.all(promiseArray)

			const movieResults = []

			tmdbResults.forEach((list) => {
				movieResults.push(...list)
			})

			dispatch(
				addGPTMovieResults({
					searchText,
					movieNames,
					movieResults,
				}),
			)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
			searchRef.current.value = ''
		}
	}

	return { handleSearch, loading, error, searchRef }
}

export default useGPTMovieSearch

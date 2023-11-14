import { createSlice } from '@reduxjs/toolkit'

const GPTSlice = createSlice({
	name: 'gpt',
	initialState: {
		searchText: null,
		moviesNames: null,
		movieResults: null,
	},
	reducers: {
		addGPTMovieResults: (state, action) => {
			const { searchText, movieNames, movieResults } = action.payload
			state.searchText = searchText
			state.moviesNames = movieNames
			state.movieResults = movieResults
		},
	},
})

export const { addGPTMovieResults } = GPTSlice.actions

export default GPTSlice.reducer

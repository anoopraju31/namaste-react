import { createSlice } from '@reduxjs/toolkit'

const GPTSlice = createSlice({
	name: 'gpt',
	initialState: {
		showGPTSearch: false,
		searchText: null,
		moviesNames: null,
		movieResults: null,
	},
	reducers: {
		toggleGPTSearchView: (state, action) => {
			state.showGPTSearch = !state.showGPTSearch
		},
		addGPTMovieResults: (state, action) => {
			const { searchText, movieNames, movieResults } = action.payload
			state.searchText = searchText
			state.moviesNames = movieNames
			state.movieResults = movieResults
		},
	},
})

export const { toggleGPTSearchView, addGPTMovieResults } = GPTSlice.actions

export default GPTSlice.reducer

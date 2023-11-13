import { createSlice } from '@reduxjs/toolkit'

const GPTSlice = createSlice({
	name: 'gpt',
	initialState: {
		showGPTSearch: false,
		language: 'en',
	},
	reducers: {
		toggleGPTSearchView: (state, action) => {
			state.showGPTSearch = !state.showGPTSearch
		},
		selectLanguage: (state, action) => {
			state.language = action.payload
		},
	},
})

export const { toggleGPTSearchView, selectLanguage } = GPTSlice.actions

export default GPTSlice.reducer

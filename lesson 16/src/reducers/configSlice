import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
	name: 'config',
	initialState: {
		language: 'en',
	},
	reducers: {
		selectLanguage: (state, action) => {
			state.language = action.payload
		},
	},
})

export const { selectLanguage } = configSlice.actions

export default configSlice.reducer

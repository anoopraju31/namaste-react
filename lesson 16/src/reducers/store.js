import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlices'
import GPTReducer from './GPTSlice'
import configReducer from './configSlice.js'

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer,
		gpt: GPTReducer,
		config: configReducer,
	},
})

export default store

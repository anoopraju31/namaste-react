import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlices'
import GPTReducer from './GPTSlice'

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer,
		gpt: GPTReducer,
	},
})

export default store

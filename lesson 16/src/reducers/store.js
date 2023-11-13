import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlices'

const store = configureStore({
	reducer: {
		user: userReducer,
		movies: movieReducer,
	},
})

export default store

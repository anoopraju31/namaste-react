import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const store = configureStore({
	cart: cartSlice,
})

export default store

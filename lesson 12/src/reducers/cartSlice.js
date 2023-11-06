import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		quantity: 0,
	},
	reducers: {
		addItem: (state, action) => {
			// Mutating the state here
			const index = state.items.findIndex(
				(item) => item.food.id === action.payload.id,
			)

			if (index === -1) {
				state.items.push({
					food: action.payload,
					quantity: 1,
				})
			} else {
				state.items[index].quantity += 1
			}

			state.quantity += 1
		},
		removeItem: (state) => {
			state.quantity -= 1
			state.items.pop()
		},
		clearCart: (state) => {
			state.items.length = 0
			state.quantity = 0
		},
	},
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer

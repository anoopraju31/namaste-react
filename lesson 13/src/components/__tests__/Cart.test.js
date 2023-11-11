import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'

import ResturaantMenu from '../ResturaantMenu'
import Header from '../Header'
import { restaurantMenu } from '../mocks/restaurantMenu'
import store from '../../reducers/store'
import { BrowserRouter } from 'react-router-dom'

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(restaurantMenu)
		},
	})
})

describe('Cart Functionality Testing', () => {
	it('Should load restaurant menu component', async () => {
		await act(async () =>
			render(
				<Provider store={store}>
					<ResturaantMenu />
				</Provider>,
			),
		)

		const restaurantName = screen.getAllByRole('heading', {
			name: restaurantMenu.data?.cards[0]?.card?.card?.info.name,
		})

		expect(restaurantName.length).toBe(2)
	})

	it('Should load restaurant menu component', async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Provider store={store}>
						<Header />
						<ResturaantMenu />
					</Provider>
				</BrowserRouter>,
			),
		)

		const foodItem = screen.getByRole('heading', {
			name: 'Podi Masala Dosa (Breakfast)',
		})

		expect(foodItem).toBeInTheDocument()

		const foodImg = screen.getByRole('img', {
			name: 'Podi Masala Dosa (Breakfast)',
		})

		expect(foodImg).toBeInTheDocument()

		fireEvent.mouseOver(foodImg)

		const addBtn = screen.getByTestId('add Podi Masala Dosa (Breakfast)')

		expect(addBtn).toBeInTheDocument()

		fireEvent.click(addBtn)

		const cartQuantity = screen.getByTestId('cart-quantity').innerHTML

		expect(cartQuantity).toBe('1')
	})
})

import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Body from '../Body'
import { restaurantList } from '../mocks/restaurantList'

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(restaurantList)
		},
	})
})

describe('Search functionality testing', () => {
	it('Should render the Body component with Search field', async () => {
		await act(async () =>
			render(
				<BrowserRouter>
					<Body />
				</BrowserRouter>,
			),
		)

		const cardsBeforeSearch = screen.getAllByTestId('restaurant card')

		expect(cardsBeforeSearch.length).toBe(9)

		const searchBtn = screen.getByRole('button', { name: 'search' })
		const searchInput = screen.getByTestId('search input')

		fireEvent.change(searchInput, { target: { value: 'burger' } })
		fireEvent.click(searchBtn)

		const restaurantCards = screen.getAllByTestId('restaurant card')

		expect(searchBtn).toBeInTheDocument()
		expect(searchInput).toBeInTheDocument()
		expect(restaurantCards.length).toBe(2)
	})
})

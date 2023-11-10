import { render, screen } from '@testing-library/react'
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

		const searchBtn = screen.getByRole('button', { name: 'search' })

		expect(searchBtn).toBeInTheDocument()
	})
})

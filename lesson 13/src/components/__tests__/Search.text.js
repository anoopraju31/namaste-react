import { render, screen } from '@testing-library/react'
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
	it('Should render the Body component with Search field', () => {
		render(<Body />)
	})
})

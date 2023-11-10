import { fireEvent, render, screen } from '@testing-library/react'
import RestaurantCard from '../RestaurantCard'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { data } from '../mocks/restaurantData'

describe('Restarant Card Component Testing', () => {
	it('Should render RestauranCard component with props data', () => {
		render(
			<BrowserRouter>
				<RestaurantCard resData={data} />
			</BrowserRouter>,
		)

		const restaurantName = screen.getByText(data.info.name)
		const restaurantCuisines = screen.getByText(data.info.cuisines.join(', '))
		const restaurantRatings = screen.getByText(data.info.avgRating + ' Stars')
		const costOfTwo = screen.getByText(data.info.costForTwo)

		expect(restaurantName).toBeInTheDocument()
		expect(restaurantCuisines).toBeInTheDocument()
		expect(restaurantRatings).toBeInTheDocument()
		expect(costOfTwo).toBeInTheDocument()
	})
})

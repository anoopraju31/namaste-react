import { render, screen } from '@testing-library/react'
import RestaurantCard, { withVegLabel } from '../RestaurantCard'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { data, vegRestaurant } from '../mocks/restaurantData'

describe('Restarant Card Component Testing', () => {
	it('Should render Restaurant Card component with props data', () => {
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

	it('Should render Restaurant Card component with Veg Label props data', () => {
		const VegRestaurantCard = withVegLabel(RestaurantCard)
		render(
			<BrowserRouter>
				<VegRestaurantCard resData={vegRestaurant} />
			</BrowserRouter>,
		)

		const restaurantName = screen.getByText(vegRestaurant.info.name)
		const restaurantCuisines = screen.getByText(
			vegRestaurant.info.cuisines.join(', '),
		)
		const restaurantRatings = screen.getByText(
			vegRestaurant.info.avgRating + ' Stars',
		)
		const costOfTwo = screen.getByText(vegRestaurant.info.costForTwo)

		expect(restaurantName).toBeInTheDocument()
		expect(restaurantCuisines).toBeInTheDocument()
		expect(restaurantRatings).toBeInTheDocument()
		expect(costOfTwo).toBeInTheDocument()
	})
})

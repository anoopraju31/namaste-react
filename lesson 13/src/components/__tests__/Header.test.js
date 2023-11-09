import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import store from '../../reducers/store'
import Header from '../Header'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

describe('Header Component Testing', () => {
	it('Should render Header Component with login button', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>,
		)

		// Querying
		const loginButton = screen.getByRole('button', { name: 'Login' })

		// Alternative way
		// const loginButton = screen.getByText('Login')

		expect(loginButton).toBeInTheDocument()
	})

	it('Should render Header Component with cart', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>,
		)

		// Querying
		const cart = screen.getByText('cart')

		expect(cart).toBeInTheDocument()
	})

	it('Should render Header Component with cart items 0', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>,
		)

		// Querying
		const cartItem = screen.getByText('0')

		expect(cartItem).toBeInTheDocument()
	})

	it('Should change login button to logout on click', () => {
		render(
			<BrowserRouter>
				<Provider store={store}>
					<Header />
				</Provider>
			</BrowserRouter>,
		)

		const loginButton = screen.getByRole('button', { name: 'Login' })

		fireEvent.click(loginButton)

		const logoutButton = screen.getByRole('button', { name: 'Logout' })

		expect(logoutButton).toBeInTheDocument()
	})
})

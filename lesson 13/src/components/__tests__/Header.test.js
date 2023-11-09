import { render, screen } from '@testing-library/react'
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
})

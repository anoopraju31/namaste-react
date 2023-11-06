import React, { Suspense, lazy, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Contact from './components/Contact'
import Error from './components/Error'
import Shimmer from './components/Shimmer'
import UserContext from './context/UserContext'
import store from './reducers/store'
import Cart from './components/Cart'

const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))
const Body = lazy(() => import('./components/Body'))
const ResturaantMenu = lazy(() => import('./components/ResturaantMenu'))

const AppLayout = () => {
	const [username, setUsername] = useState('')

	useEffect(() => {
		// Make an API call and send username and password
		const data = {
			name: 'Anoop Raju',
		}

		setUsername(data.name)
	}, [])

	return (
		<Provider store={store}>
			<UserContext.Provider value={{ loggedInUser: username, setUsername }}>
				<div className='app'>
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	)
}

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<h1> Loading... </h1>}>
						<Body />
					</Suspense>
				),
			},
			{
				path: '/about',
				element: (
					<Suspense fallback={<h1> Loading... </h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback={<h1> Loading... </h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: '/restuarant/:id',
				element: (
					<Suspense fallback={<Shimmer />}>
						<ResturaantMenu />
					</Suspense>
				),
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)

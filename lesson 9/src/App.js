import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import {
// 	About,
// 	Body,
// 	Contact,
// 	Error,
// 	Header,
// 	ResturaantMenu,
// } from './components'

import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import About from './components/About'
import ResturaantMenu from './components/ResturaantMenu'

const Grocery = lazy(() => import('./components/Grocery'))

const AppLayout = () => (
	<div className='app'>
		<Header />
		<Outlet />
	</div>
)

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about',
				element: <About />,
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
				element: <ResturaantMenu />,
			},
		],
		errorElement: <Error />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)

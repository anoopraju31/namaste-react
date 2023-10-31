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

import Header from '../components/Header'
import Contact from '../components/Contact'
import Error from '../components/Error'
import Shimmer from '../components/Shimmer'

const Grocery = lazy(() => import('../components/Grocery'))
const About = lazy(() => import('../components/About'))
const Body = lazy(() => import('../components/Body'))
const ResturaantMenu = lazy(() => import('../components/ResturaantMenu'))

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
		],
		errorElement: <Error />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)

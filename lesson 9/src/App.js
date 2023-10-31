import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
	About,
	Body,
	Contact,
	Error,
	Grocery,
	Header,
	ResturaantMenu,
} from './components'

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
				element: <Grocery />
			}
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

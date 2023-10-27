import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Body, Header } from './components'

const AppLayout = () => (
	<div className='app'>
		<Header />
		<Body />
	</div>
)

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
	},
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Body from './components/Body'
import Login from './pages/Login'
import Browse from './pages/Browse'
import GPTSearch from './components/GPTSearch'
import store from './reducers/store'

const App = () => {
	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Body />,
			children: [
				{
					path: '/',
					element: <Login />,
				},
				{
					path: '/browse',
					element: <Browse />,
				},
				{
					path: '/search',
					element: <GPTSearch />,
				},
			],
		},
	])
	return (
		<Provider store={store}>
			<RouterProvider router={appRouter} />
		</Provider>
	)
}

export default App

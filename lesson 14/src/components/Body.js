import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import Browse from './Browse'
import Login from './Login'
import { auth } from '../utills/firebase'
import { addUser, removeUser } from '../reducers/userSlice'

const Body = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			const { accessToken, displayName, email, photoUrl } = user

			if (user) dispatch(addUser({ accessToken, displayName, email, photoUrl }))
			else dispatch(removeUser())
		})
	}, [dispatch])

	const appRouter = createBrowserRouter([
		{
			path: '/',
			element: <Login />,
		},
		{
			path: '/browse',
			element: <Browse />,
		},
	])
	return <RouterProvider router={appRouter} />
}

export default Body

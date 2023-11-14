import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { addUser, removeUser } from '../reducers/userSlice'

const useAuthStateChange = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			const pathname = window.location.pathname

			if (user) {
				const { accessToken, displayName, uid, email, photoURL } = user
				dispatch(addUser({ accessToken, displayName, uid, email, photoURL }))
				navigate(pathname === '/' ? '/browse' : pathname)
			} else {
				dispatch(removeUser())
				navigate('/')
			}
		})

		// unsubscribe will be called when the component unmounts
		return () => unsubscribe()
	}, [dispatch, navigate])
}

export default useAuthStateChange

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { LOGO_IMG } from '../utills/constants'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { addUser, removeUser } from '../reducers/userSlice'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user)

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { accessToken, displayName, uid, email, photoURL } = user
				dispatch(addUser({ accessToken, displayName, uid, email, photoURL }))
				navigate('/browse')
			} else {
				dispatch(removeUser())
				navigate('/')
			}
		})

		// unsubscribe will be called when the component unmounts
		return () => unsubscribe()
	}, [dispatch, navigate])

	const handleSignOut = () => {
		signOut(auth).catch((error) => navigate('/error'))
	}
	return (
		<header className='absolute w-full max-w-[1536px] mx-auto px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between'>
			<div className=''>
				<img
					className='w-28 sm:w-32 md:w-36 lg:w-44'
					src={LOGO_IMG}
					alt='logo'
				/>
			</div>

			{user && (
				<div className='hidden md:flex'>
					<img className='w-12 h-12' src={user?.photoURL} alt='user avatar' />

					<button onClick={handleSignOut} className='font-bold text-white'>
						{' '}
						Sign Out{' '}
					</button>
				</div>
			)}
		</header>
	)
}

export default Header

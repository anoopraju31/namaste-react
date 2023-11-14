import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth'
import { auth } from '../utills/firebase'
import { checkValidateData } from '../utills/validation'
import { addUser } from '../reducers/userSlice'
import { USER_AVATAR } from '../utills/constants'

const useAuth = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState('')
	const dispatch = useDispatch()

	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const passwordRef = useRef(null)

	const handleButtonClick = (e) => {
		e.preventDefault()

		const name = nameRef?.current?.value
		const email = emailRef?.current?.value
		const password = passwordRef?.current?.value

		// Validate the form data
		const message = checkValidateData(name, email, password)
		setErrorMessage(message)

		if (message) return

		if (!isSignInForm) {
			// Sign Up Logic
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					const user = userCredential.user

					// Add user name to account
					updateProfile(user, {
						displayName: name,
						photoURL: USER_AVATAR,
					})
						.then(() => {
							const { accessToken, uid, displayName, email, photoURL } =
								auth.currentUser
							dispatch(
								addUser({ accessToken, uid, displayName, email, photoURL }),
							)
						})
						.catch((error) => {
							setErrorMessage(error.message)
						})
				})
				.catch((error) => {
					setErrorMessage(error.message)
				})
		} else {
			// Sign In Logic
			signInWithEmailAndPassword(auth, email, password).catch((error) => {
				setErrorMessage(error.message)
			})
		}
	}

	const toggleSignInForm = () => {
		setIsSignInForm((prev) => !prev)
	}

	return {
		isSignInForm,
		toggleSignInForm,
		nameRef,
		emailRef,
		passwordRef,
		errorMessage,
		handleButtonClick,
	}
}

export default useAuth

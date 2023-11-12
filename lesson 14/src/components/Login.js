import React, { useRef, useState } from 'react'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import Header from './Header'
import { checkValidateData } from '../utills/validation'
import { LOGIN_BG } from '../utills/constants'
import { auth } from '../utills/firebase'

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true)
	const [errorMessage, setErrorMessage] = useState()

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
					// Signed up
					const user = userCredential.user

					console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message

					setErrorMessage(errorCode + ' - ' + errorMessage)

					console.log(errorCode, errorMessage)
				})
		} else {
			// Sign In Logic
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user
					console.log(user)
				})
				.catch((error) => {
					const errorCode = error.code
					const errorMessage = error.message

					setErrorMessage(errorCode + ' - ' + errorMessage)

					console.log(errorCode, errorMessage)
				})
		}
	}

	const toggleSignInForm = () => {
		setIsSignInForm((prev) => !prev)
	}

	return (
		<div>
			<Header />

			<div className='w-full h-screen'>
				<img
					className='w-full h-full object-cover '
					src={LOGIN_BG}
					alt='login background'
				/>
			</div>

			<div className='absolute top-0 left-0 right-0 w-full h-screen flex justify-center sm:items-center bg-black sm:bg-black/30'>
				<form className='w-full sm:w-96 my-20 sm:mt-0 p-8 sm:rounded-lg flex flex-col bg-black/80 text-white'>
					{/* Title */}
					<h1 className='font-medium text-3xl pb-8'>
						{' '}
						{isSignInForm ? 'Sign In' : 'Sign Up'}{' '}
					</h1>

					{/* Name */}
					{!isSignInForm && (
						<input
							type='text'
							ref={nameRef}
							placeholder='Full Name'
							className='w-full mb-4 px-4 py-2 bg-zinc-700 outline-none rounded-md'
						/>
					)}

					{/* Email */}
					<input
						type='text'
						ref={emailRef}
						placeholder='Email Address'
						className='w-full mb-4 px-4 py-2 bg-zinc-700 outline-none rounded-md'
					/>

					{/* Password */}
					<input
						type='password'
						ref={passwordRef}
						placeholder='Password'
						className='w-full mb-4 px-4 py-2 bg-zinc-700 outline-none rounded-md'
					/>

					{errorMessage !== null && (
						<p className='text-sm text-red-500'> {errorMessage} </p>
					)}

					<div className='mt-4 mb-8 '>
						{/* Submit Button */}
						<button
							onClick={handleButtonClick}
							className='w-full mb-2 px-6 py-2 font-medium bg-red-600 rounded-md'>
							{isSignInForm ? 'Sign In' : 'Sign Up'}
						</button>

						<div className='flex justify-between text-xs text-zinc-400'>
							<div className='flex items-center gap-1'>
								<input type='checkbox' id='remember-me' />
								<label htmlFor='remember-me'> Remember me </label>
							</div>

							<p
								tabIndex={0}
								className='border-b border-b-transparent hover:border-b-zinc-400'>
								Need help?
							</p>
						</div>
					</div>

					{/* Switch between sign in and sign up page */}
					<p className='text-sm text-zinc-400'>
						{isSignInForm ? 'New to Netflix? ' : 'Already registered? '}
						<span
							tabIndex={0}
							onClick={toggleSignInForm}
							className='text-white hover:border-b hover:border-b-white'>
							{isSignInForm ? 'Sign up now' : 'Sign in now'}
						</span>
						.
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login

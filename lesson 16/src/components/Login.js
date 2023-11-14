import useAuth from '../hooks/useAuth'
import Header from './Header'
import { LOGIN_BG } from '../utills/constants'

const Login = () => {
	const {
		isSignInForm,
		toggleSignInForm,
		nameRef,
		passwordRef,
		emailRef,
		errorMessage,
		handleButtonClick,
	} = useAuth()

	return (
		<main>
			<Header />

			<section className='w-full h-screen'>
				<img
					className='w-full h-full object-cover '
					src={LOGIN_BG}
					alt='login background'
				/>
			</section>

			<section className='absolute top-0 left-0 right-0 w-full h-screen flex justify-center sm:items-center bg-black sm:bg-black/30'>
				<form className='w-full sm:w-96 my-20 sm:mt-0 p-6 sm:p-8 sm:rounded-lg flex flex-col bg-black/80 text-white'>
					{/* Title */}
					<h1 className='font-medium text-3xl pb-8'>
						{isSignInForm ? 'Sign In' : 'Sign Up'}
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

					{/* Error Message */}
					{errorMessage && (
						<p className='text-sm text-red-500'> {errorMessage} </p>
					)}

					<div className='mt-4 mb-8 '>
						{/* Submit Button */}
						<button
							type='submit'
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
						<button
							type='button'
							tabIndex={0}
							onClick={toggleSignInForm}
							className='text-white hover:border-b hover:border-b-white'>
							{isSignInForm ? 'Sign up now' : 'Sign in now'}
						</button>
						.
					</p>
				</form>
			</section>
		</main>
	)
}

export default Login

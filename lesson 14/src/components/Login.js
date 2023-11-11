import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
	return (
		<div>
			<Header />

			<div className='w-full h-screen'>
				<img
					className='w-full h-full object-cover '
					src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt=''
				/>
			</div>

			<div className='absolute top-0 left-0 right-0 w-full h-screen flex justify-center sm:items-center bg-black sm:bg-black/30'>
				<form className='w-full sm:w-96 my-20 sm:mt-0 p-8 sm:rounded-lg flex flex-col bg-black/80 text-white'>
					<h1 className='font-medium text-3xl pb-8'> Sign In </h1>
					<input
						type='text'
						placeholder='Email Address'
						className='w-full mb-4 px-6 py-2 bg-zinc-700 outline-none rounded-md'
					/>

					<input
						type='password'
						placeholder='Password'
						className='w-full mb-4 px-6 py-2 bg-zinc-700 outline-none rounded-md'
					/>

					<div className='mt-4 mb-8 '>
						<button className='w-full mb-2 px-6 py-2 font-medium bg-red-600 rounded-md'>
							{' '}
							Sign In{' '}
						</button>

						<div className='flex justify-between text-sm text-zinc-400'>
							<div className='flex items-center gap-1'>
								<input type='checkbox' id='remember-me' checked />
								<label htmlFor='remember-me'> Remember me </label>
							</div>

							<p className=''> Need help? </p>
						</div>
					</div>
					<p className='text-sm text-zinc-400'>
						{' '}
						New to Netflix?{' '}
						<Link
							to='/sign-up '
							className='text-white hover:border-b hover:border-b-white'>
							Sign up now
						</Link>
						.
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login

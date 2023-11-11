import React from 'react'
import Header from './Header'

const Login = () => {
	return (
		<div>
			<Header />

			<div className='w-full h-screen'>
				<img
					className='w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt=''
				/>
			</div>

			<div className='absolute top-0 left-0 right-0 w-full h-screen flex justify-center sm:items-center bg-black sm:bg-transparent'>
				<form className='w-full sm:w-96 my-20 sm:mt-0 p-6 sm:rounded-xl flex flex-col bg-black/75 text-white'>
					<h1 className='font-medium text-3xl pb-8'> Sign In </h1>
					<input
						type='text'
						placeholder='Email Address'
						className='w-full mb-4 px-6 py-2 bg-zinc-700 outline-none'
					/>

					<input
						type='password'
						placeholder='Password'
						className='w-full mb-4 px-6 py-2 bg-zinc-700 outline-none'
					/>

					<button className='w-full my-4 px-6 py-2 font-medium bg-red-600 rounded-lg'>
						{' '}
						Sign In{' '}
					</button>
				</form>
			</div>
		</div>
	)
}

export default Login

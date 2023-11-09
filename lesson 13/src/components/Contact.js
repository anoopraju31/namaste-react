const Contact = () => {
	return (
		<div className='max-w-3xl mx-auto p-6'>
			<h1 className='text-center font-bold text-3xl p-4 m-4'>
				{' '}
				Contact Us Page{' '}
			</h1>

			<form className='flex flex-col justify-center'>
				<input
					type='text'
					className='border border-black p-2 m-2 rounded-lg'
					placeholder='name'
				/>
				<input
					type='text'
					className='border border-black p-2 m-2 rounded-lg'
					placeholder='message'
				/>
				<button className='m-2 rounded-lg p-2 bg-green-500'> Submit </button>
			</form>
		</div>
	)
}

export default Contact

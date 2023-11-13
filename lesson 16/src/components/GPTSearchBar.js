import { useSelector } from 'react-redux'
import languages from '../utills/languageConstants'

const GPTSearchBar = () => {
	const selectedLanguage = useSelector((state) => state.gpt.language)

	return (
		<div className='py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40 flex flex-col items-center'>
			<form className='flex-shrink-0 p-4 w-full flex justify-center'>
				<input
					type='text'
					className='w-full max-w-2xl p-3 sm:p-4 rounded-tl-xl rounded-bl-xl text-gray-900 text-sm sm:text-base sm:font-medium outline-none'
					placeholder={languages[selectedLanguage].placeholder}
				/>
				<button
					type='submit'
					className='py-3 sm:py-4 px-4 sm:px-6 bg-red-600 text-white rounded-tr-xl rounded-br-xl text-sm sm:text-base sm:font-medium'>
					{languages[selectedLanguage].search}
				</button>
			</form>
		</div>
	)
}

export default GPTSearchBar

import { useSelector } from 'react-redux'
import useHeader from '../hooks/useHeader'
import { SUPPORTED_LANGUAGES } from '../utills/constants'

const LanguageSelect = () => {
	const selectedLanguage = useSelector((state) => state.config?.language)
	const { handleLanguageSelect } = useHeader()

	return (
		<select
			name='supported languages'
			id='language'
			value={selectedLanguage}
			onChange={handleLanguageSelect}
			className='text-sm rounded-lg font-medium block py-1.5 px-4 bg-slate-400/80 border-none outline-none placeholder-gray-400 text-white'>
			{SUPPORTED_LANGUAGES.map(({ identifier, name }) => (
				<option key={identifier} value={identifier}>
					{name}
				</option>
			))}
		</select>
	)
}

export default LanguageSelect

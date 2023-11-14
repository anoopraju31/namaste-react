import { useSelector } from 'react-redux'
import useAuthStateChange from '../hooks/useAuthStateChange.js'
import useHeader from '../hooks/useHeader.js'
import { LOGO_IMG, SUPPORTED_LANGUAGES } from '../utills/constants'

const Header = () => {
	const user = useSelector((state) => state.user)
	const selectedLanguage = useSelector((state) => state.config?.language)
	const showGPTSearch = useSelector((state) => state.gpt.showGPTSearch)
	const { handleSignOut, handleGPTSearchClick, handleLanguageSelect } =
		useHeader()

	useAuthStateChange()

	return (
		<header className='absolute w-full px-0 sm:px-8 py-2 bg-gradient-to-b from-black z-50'>
			<div className='max-w-[1536px] mx-auto flex flex-col md:flex-row justify-between'>
				<div className=''>
					<img
						className='w-28 sm:w-32 md:w-36 lg:w-44'
						src={LOGO_IMG}
						alt='logo'
					/>
				</div>

				{user && (
					<div className='hidden md:flex items-center gap-2'>
						{showGPTSearch && (
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
						)}
						<button
							onClick={handleGPTSearchClick}
							className='py-1 px-4 text-white bg-purple-600 rounded-lg font-medium'>
							{showGPTSearch ? 'Home' : 'GPT Search'}
						</button>
						<img
							className='w-8 h-8 rounded-lg'
							src={user?.photoURL}
							alt='user avatar'
						/>

						<button
							onClick={handleSignOut}
							className='py-1 px-4 text-white bg-red-600 rounded-lg font-medium'>
							Sign Out
						</button>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header

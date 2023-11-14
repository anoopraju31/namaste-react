import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { toggleGPTSearchView } from '../reducers/GPTSlice'
import { selectLanguage } from '../reducers/configSlice'

const useHeader = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSignOut = () => {
		signOut(auth).catch((error) => navigate('/error'))
	}

	const handleGPTSearchClick = () => {
		// Toggle GPT Search Click
		dispatch(toggleGPTSearchView())
	}

	const handleLanguageSelect = (e) => {
		dispatch(selectLanguage(e.target.value))
	}

	return { handleSignOut, handleGPTSearchClick, handleLanguageSelect }
}

export default useHeader

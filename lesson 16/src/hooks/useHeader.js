import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../utills/firebase'
import { selectLanguage } from '../reducers/configSlice'

const useHeader = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleSignOut = () => {
		signOut(auth).catch((error) => navigate('/error'))
	}

	const handleLanguageSelect = (e) => {
		dispatch(selectLanguage(e.target.value))
	}

	return { handleSignOut, handleLanguageSelect }
}

export default useHeader

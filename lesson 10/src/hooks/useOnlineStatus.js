import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(true)

	useEffect(() => {
		const handleOfflineEvent = window.addEventListener('offline', () => {
			setOnlineStatus(false)
		})

		const handleOnlineEvent = window.addEventListener('online', () => {
			setOnlineStatus(true)
		})

		return () => {
			window.removeEventListener('offline', handleOfflineEvent)
			window.removeEventListener('online', handleOnlineEvent)
		}
	}, [])

	return onlineStatus
}

export default useOnlineStatus

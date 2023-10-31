import { useEffect, useState } from 'react'
import { RESTAURANT_INFO_URL } from '../utills/constants'

const useRestuarantInfo = (resId) => {
	const [restuarantInfo, setRestuarantInfo] = useState(null)

	useEffect(() => {
		fetchMenu(resId)
	}, [resId])

	const fetchMenu = async (resId) => {
		const res = await fetch(RESTAURANT_INFO_URL + resId)
		const data = await res.json()

		setRestuarantInfo(data?.data)
	}

	return restuarantInfo
}

export default useRestuarantInfo

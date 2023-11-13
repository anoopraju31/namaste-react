import { IMG_CDN_URL } from '../utills/constants'
import { FaImage } from 'react-icons/fa6'

const MovieCard = ({ poster, fixedWidth }) => {
	return (
		<div
			className={`relative group flex-shrink-0 cursor-pointer flex ${
				fixedWidth && 'w-36 md:w-48 '
			}`}>
			{poster ? (
				<img className='rounded-xl w-full' src={IMG_CDN_URL + poster} alt='' />
			) : (
				<div className='w-full h-full flex justify-center bg-black/70 border rounded-xl items-center text-gray-300'>
					<FaImage size={64} />
				</div>
			)}
			<div className='absolute w-full h-full group-hover:bg-black/40'></div>
		</div>
	)
}

export default MovieCard

import { IMG_CDN_URL } from '../utills/constants'

const MovieCard = ({ poster }) => {
	return (
		<div className='relative group w-36 md:w-48 flex-shrink-0 cursor-pointer flex'>
			<img className='rounded-xl w-full' src={IMG_CDN_URL + poster} alt='' />
			<div className='absolute w-full h-full group-hover:bg-black/40'></div>
		</div>
	)
}

export default MovieCard

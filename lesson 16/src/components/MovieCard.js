import { IMG_CDN_URL } from '../utills/constants'

const MovieCard = ({ poster }) => {
	return (
		<div className='w-36 md:w-48 flex-shrink-0'>
			<img className='rounded-xl' src={IMG_CDN_URL + poster} alt='' />
		</div>
	)
}

export default MovieCard

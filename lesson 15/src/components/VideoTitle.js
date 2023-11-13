import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'

const VideoTitle = ({ title, overview }) => {
	return (
		<div className='max-w-[1536px] w-full aspect-video mx-auto pt-[40%] sm:pt-[20%] px-4 sm:px-10 md:px-14 lg:px-20 relative sm:absolute text-white  bg-gradient-to-t from-black/50 z-10'>
			<h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>
				{' '}
				{title}{' '}
			</h1>
			<p className='py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg max-w-lg '>
				{' '}
				{overview}{' '}
			</p>
			<div className='flex gap-4 lg:gap-6'>
				<button className='bg-white text-black py-1.5 sm:py-2 lg:py-3 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-xl hover:bg-opacity-80 rounded-lg flex items-center gap-2 '>
					<BsFillPlayFill size={24} />
					<span> Play </span>
				</button>
				<button className='bg-gray-500 text-white py-1.5 sm:py-2 lg:py-3 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-xl bg-opacity-50 rounded-lg flex items-center gap-2'>
					<AiOutlineInfoCircle size={20} />
					<span> More Info </span>
				</button>
			</div>
		</div>
	)
}

export default VideoTitle
